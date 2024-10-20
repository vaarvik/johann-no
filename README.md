# This project

Welcome to this project, a web application built using Next.js. This README provides an overview of the project
structure, configuration, and setup.

## Table of Contents

- [This project](#this-project)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Folder Structure](#folder-structure)
    - [General Conventions](#general-conventions)
  - [Setup and Configuration](#setup-and-configuration)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Configuration Files](#configuration-files)
  - [Development](#development)
    - [Running the Development Server](#running-the-development-server)
    - [SCSS Module Typings](#scss-module-typings)
    - [Code Formatting](#code-formatting)
    - [Code Formatting Commands](#code-formatting-commands)
    - [Linting](#linting)
    - [Testing](#testing)
      - [Running Tests](#running-tests)
      - [Guidelines for Testing](#guidelines-for-testing)
    - [Husky and Lint-Staged](#husky-and-lint-staged)
    - [Authentication](#authentication)
    - [Deployment](#deployment)
      - [Vercel Deployment](#vercel-deployment)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)

## Project Overview

The project is a web application. It utilizes Next.js.

## Folder Structure

Here’s a quick overview of the folder structure:

- `app/`: Main application code.
  - `api/`: API endpoints.
  - `auth/`: Authentication-related routes.
  - `lib/`: Shared libraries and utilities.
    - `assets/`: Static assets like images and stylesheets.
      - `scss/`: Styles, with partials (e.g., \_variables.scss).
      - `img/`: Images.
    - `components/`: Reusable UI components (use PascalCase for naming).
      - `*/`: Components may have:
        - `services/`: Logic specific to a component like utils and hooks.
        - `components/`: Sub components for the specific component.
    - `services/`: Application-wide services (custom hooks, utilities).
      - `hooks/`: Contains custom hooks only used only by this component.
      - `utils/`: Contains utils only used by this component.
- `server-utils/`: Server-side utilities.

### General Conventions

1.  **Folder Naming**:

    - Use **PascalCase** for component folders (e.g., Button/).
    - Use **kebab-case** for other folders (e.g., hooks/, utils/).
    - Some components or services related to a very specific topic can have its own folder like for example `form` or
      `layout`. Also if it is a specific domain like Projects which is only used in the purpose of project and nothing
      else, it could have its own folder with () around `(projects)`.

2.  **File Naming**:

    - Use **PascalCase** for component files (e.g., Button.tsx).
    - Use **camelCase** for service and hook files (e.g., useGetDates.ts).
    - Use **kebab-case** for all other files.

3.  **Folder Structure**:

    - Keep components and services related to a specific feature or domain grouped together.
    - Introduce new sub folders when a component or service has multiple related files or when a component's complexity
      grows.

4.  **SCSS and Styles**:

    - Always use classes for styles
    - Naming follows the [BEM methodology](https://getbem.com/)
    - Use SCSS modules for component styles (e.g. `button.module.scss`)
    - Maintain a consistent naming convention for SCSS files, using underscores for partials (e.g., \_variables.scss).

5.  **Complexity**:

    - New code/functionality is easy to understand and follows [SOLID](https://en.wikipedia.org/wiki/SOLID) principles.
      - If a component for example does more than **one** thing it should be broken down into simpler and smaller child
        components or/and custom hooks.
    - Outside `app/lib/components` only inline text sematic HTML tags are allowed.
      <details><summary>List of allowed semantic tags</summary>
      <ul>
        <li>&lt;b&gt;: Bold text</li>
        <li>&lt;i&gt;: Italic text</li>
        <li>&lt;u&gt;: Underlined text</li>
        <li>&lt;strong&gt;: Strong importance (usually rendered as bold)</li>
        <li>&lt;em&gt;: Emphasis (usually rendered as italic)</li>
        <li>&lt;small&gt;: Smaller text</li>
        <li>&lt;mark&gt;: Marked or highlighted text</li>
        <li>&lt;sub&gt;: Subscript text</li>
        <li>&lt;sup&gt;: Superscript text</li>
        <li>&lt;ins&gt;: Inserted text</li>
        <li>&lt;del&gt;: Deleted text</li>
        <li>&lt;code&gt;: Inline code</li>
        <li>&lt;kbd&gt;: Keyboard input</li>
        <li>&lt;samp&gt;: Sample output</li>
        <li>&lt;var&gt;: Variable</li>
        <li>&lt;cite&gt;: Citation</li>
        <li>&lt;abbr&gt;: Abbreviation</li>
        <li>&lt;time&gt;: Time</li>
        <li>&lt;bdi&gt;: Bi-directional isolation</li>
        <li>&lt;bdo&gt;: Bi-directional override</li>
        </ul>
      </details>

      Example code:

      ```tsx
      export default async function ProjectsView({ projects }: Props): Promise<JSX.Element> {
        return (
          <Container>
            <ContentPadded>
              <FlexContainer justify="space-between" align="center" gap="sm">
                <Heading level={1}>Prosjekter</Heading>
                <ProjectCreateButton />
              </FlexContainer>
              {projects.length === 0 ? (
                <Paragraph>
                  Du har <b>ingen</b> prosjekter.
                </Paragraph>
              ) : (
                <ProjectList projects={projects} />
              )}
            </ContentPadded>
          </Container>
        );
      }
      ```

## Setup and Configuration

### Prerequisites

Make sure you have the following installed:

- Node.js (v20 or higher)

- npm

### Installation

1.  ```bash
    git clone
    ```
2.  ```bash
    npm install
    ```
3.  Set up environment variables by creating a .env file from `.env.example` and updating it with your values.

### Configuration Files

- `./typed-scss-modules.config.ts`: Configuration for typed-scss-modules.

- `./vitest.config.mts`: Vitest configuration for testing.

- `./tsconfig.json`: TypeScript compiler options.

- `./.stylelintrc.json`: Stylelint configuration for SCSS files.

- `./.prettierrc.json`: Prettier configuration for code formatting.

- `./.eslintrc.json`: ESLint configuration for JavaScript and TypeScript linting.

- `./vscode/extensions.json`: Recommended VSCode extensions.

- `./vscode/settings.json`: VSCode settings for code formatting and linting.

## Development

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

### SCSS Module Typings

Typed SCSS Modules (TSM) is used to generate TypeScript typings for SCSS modules. This ensures that class names from
`.module.scss` files are type-safe when used in your TypeScript code.

For each .module.scss file, TSM will generate a corresponding `.module.scss.d.t` file. This file contains the TypeScript
definition of the SCSS classes, allowing you to safely import and use those classes in your components.

TSM runs when you run `npm run dev`, but can also be ran manually with the following command:

```bash
npm run tsm:fix
```

### Code Formatting

Prettier and Stylelint are used for code formatting. The configuration for Prettier and Stylelint can be found in
`.prettierrc.json` and `.stylelintrc.json`, respectively.

### Code Formatting Commands

To format your code, run:

```bash
npm run format:fix
```

### Linting

Linting is configured with ESLint and Stylelint. Linting scripts are available for JavaScript, TypeScript, and SCSS.

To run linting, use:

```bash
npm run lint
```

### Testing

Vitest is used for testing. The configuration file is `vitest.config.mts`.

#### Running Tests

To run tests, use:

```bash
npm run test
```

To run tests in watch mode:

```bash
npm run test:watch
```

#### Guidelines for Testing

When writing tests, follow these guidelines:

- Write unit tests for all lines of code defined in any file within a `services` folder. All components in the
  `app/lib/components` should be tested. In other cases things should be that well abstracted into services that there
  should be no need to write a test for a widgets, pages or similar outside the `app/lib/components` folder.
- When testing components we should get any HTML tags by `data-testid` in order to make the tests sustainable and
  prevent changes.
- Use Descriptive Test Names: Test names should clearly describe what they are testing and follow the classic
  [Behavior-Driven Development (BDD) Style](https://www.browserstack.com/guide/what-is-bdd) like so:

  ```ts
  describe('useDebounced', () => {
    // ...
    it('should execute the callback after the debounce delay', () => {
      //...
    });
  });
  ```

### Husky and Lint-Staged

To ensure code quality and consistency, Husky and lint-staged are used to run linters and formatters before commits.

- **Husky**: Hooks into Git to run scripts before commits and pushes.
- **Lint-Staged**: Runs linters on pre-committed files only.

### Authentication

For authentication we use our custom authentication handler, Auth Service. It adds the necessary cookies to our session
which allows us to fetch data from the backend. All this frontend does regarding authentication is basically that it
redirects the user to the Auth Service login page if no cookie is set/valid.

### Deployment

The project is deployed to
[Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
The GitHub Actions workflow for production deployment is defined in `.github/workflows/production.yaml`.

#### Vercel Deployment

To deploy to Vercel, push changes to the main branch. The workflow will handle:

1.  Pulling Vercel environment information.
2.  Building the project.
3.  Migrating database changes.
4.  Deploying artifacts to Vercel.

## Environment Variables

Ensure that all required environment variables are defined in your `.env` file. The `.env.example` file provides a
template for required environment variables.

## Contributing

Please ensure you follow the code formatting and linting rules. Submit pull requests with clear descriptions of changes.
