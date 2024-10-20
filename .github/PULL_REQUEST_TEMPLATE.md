[HZN-XYZ]

## What was done to implement the change?

- Description of change 1
- Description of change 2...

## Description

- [ ] All changes made have been described.

## Code Changes

- [ ] Code/functionality is easy to understand and follows general conventions around complexity in
    [README.md](/README.md#general-conventions).<details>
  <summary>Details</summary>
  <ul>
    <li>Variable and function names is easy to understand.</li>
    <li>Follows the S, I and L in the <a href="https://en.wikipedia.org/wiki/SOLID">SOLID</a> principles. To strictly follow the O and D is considered to rather create extra overhead in a React project.</li>
    <li>No pure HTML tags are used in layouts, pages or widgets or generally outside components in <code>app/lib/components/</code>.</li>
  </ul>
</details>

- [ ] Files follows given folder structure in [README.md](/README.md#folder-structure).<details>
  <summary>Details</summary>
  <ul>
    <li>Store logic and services used by multiple components in <code>app/lib/services/</code>. Those used only by
    one component should be in a folder within the component itself in <code>app/lib/components/MyComponent/services/</code>.</li>
    <li>Organize files within app/ according to their purpose, e.g., api/ for endpoints, auth/ for
    authentication routes, and lib/ for shared libraries and utilities.</li>
  </ul>
</details>

- [ ] Files and folders follow given file naming convention in [README.md](/README.md#general-conventions).<details>
  <summary>Details</summary>
  <ul>
    <li>Use PascalCase for component <b>folders</b> (e.g., Button/) and kebab-case for other folders (e.g., hooks/,
    utils/).
    <li>Use folder groups on components or services related to a very specific topic like for example <code>form</code> or <code>layout</code>. For specific domain like Projects which is only used in the purpose of project and nothing else, do folder groups with () around <code>(project)</code>.</li>
    <li>Use PascalCase for component files (e.g., Button.tsx), camelCase for service and hook files (e.g., useGetDates.ts) and kebab-case for the rest.</li>
    <li>Use kebab-case for all other files and folders</li>
  </ul>
</details>

- [ ] SCSS adhere to the conventions outlined in [README.md](/README.md#general-conventions).<details>
  <summary>Details</summary>
  <ul>
    <li>Utilize BEM methodology.</li>
    <li>Ensure all styles are associated with a class.</li>
    <li>Implement SCSS modules for component-specific styles.</li>
    <li>Carefully consider any modifications to global SCSS files located in <code>app/lib/assets/scss</code>.</li>
  </ul>
</details>

- [ ] No sensitive information is logged.
  - Be careful logging entire objects.
- [ ] No lint errors are being ignored.
- [ ] Possible exceptions are handled.
  - Remember to pass the original exception as a parameter.
- [ ] Alerts from SonarCloud have been addressed.
- [ ] README has been updated (if relevant).

## Dependencies

- [ ] New dependencies added are according to agreed allowed dependencies given at
      [Confluence](https://avinor.atlassian.net/wiki/x/CQChm). No new dependencies should be added without clarification
      within the team and careful documented justification.
- [ ] Unused dependencies have been removed (if any).

## Testing

### Unit and Integration Tests

- [ ] All tests run in the project.
- [ ] Tests have been written and are according to guidelines defined in
    [README.md](/README.md#guidelines-for-testing).<details> <summary>Details</summary> <ul> <li>Write unit tests for
    all code in <code>services</code> folders and components in <code>app/lib/components</code>. Other code should be
    abstracted into services.</li> <li>Use <code>data-testid</code> to fetch HTML tags when testing components for
    maintainability.</li> <li>Descriptive Test Names: Clearly describe test purposes using Behavior-Driven Development
    (BDD) style.</li>
  </ul>
</details>
