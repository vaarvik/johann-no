const { execSync } = require('child_process');
const readline = require('readline');

// Define ANSI color codes for yellow
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

// Function to check for unstaged changes and untracked files
function checkUnstagedChanges() {
  // Check for modified files
  try {
    execSync('git diff --quiet');
  } catch {
    return true; // Unstaged changes exist
  }

  // Check for untracked files
  const untrackedFiles = execSync('git ls-files --others --exclude-standard')
    .toString()
    .trim();
  if (untrackedFiles) {
    return true; // Untracked files exist
  }

  return false; // No unstaged changes or untracked files
}

// Function to prompt for user confirmation
function askForConfirmation() {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Do you still want to continue? (y/n): ', answer => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

// Main function
(async () => {
  if (checkUnstagedChanges()) {
    console.log(
      `${YELLOW}Warning: There are unstaged changes in your repository. This might affect the results of the type checks.${RESET}`,
    );
    console.log(
      `${YELLOW}Please double-check your changes before proceeding.${RESET}`,
    );

    const confirmed = await askForConfirmation();
    if (!confirmed) {
      console.log('Aborting.');
      process.exit(1);
    } else {
      console.log('Continuing...');
    }
  }

  // Run TypeScript compilation check
  try {
    execSync('npm run typecheck', { stdio: 'inherit' });
  } catch (error) {
    console.error('TypeScript compilation failed. Aborting.');
    process.exit(1);
  }

  // Run lint-staged to lint/format only staged files
  try {
    execSync('npx lint-staged', { stdio: 'inherit' });
  } catch (error) {
    console.error('Linting failed. Aborting.');
    process.exit(1);
  }
})();
