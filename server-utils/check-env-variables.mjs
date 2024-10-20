import fs from 'fs/promises';
import path from 'path';

export default async function checkEnvVariables() {
  const envExamplePath = path.resolve(process.cwd(), '.env.example');

  try {
    // Read the .env.example file
    const envExample = await fs.readFile(envExamplePath, 'utf8');

    // Parse the .env.example file to extract variable names
    const requiredEnvVars = envExample
      .split('\n')
      .filter(line => line.trim() && !line.startsWith('#')) // Ignore comments and empty lines
      .map(line => line.split('=')[0].trim()); // Extract the variable name before the "="

    // Check if each required variable is defined in process.env
    const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

    if (missingVars.length > 0) {
      throw new Error(
        `Missing the following environment variables: ${missingVars.join(', ')}. Required environment variables are defined in the ".env.example" file.`,
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Error reading or parsing .env.example: ${error.message}`,
      );
    }
  }
}
