# Johann.no

## Tech Stack

- **Framework**: Next.js (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui

## Prerequisites

- Node.js (LTS version recommended)
- pnpm (recommended package manager)
- Git

## Getting Started

1. Install dependencies:

```bash
pnpm install
```
2. Setup git pre commit hook:
```bash
git config core.hooksPath .githooks
```
3. Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Development Guidelines

- Use TypeScript for type safety
- Follow ESLint configuration
- Ensure responsive and accessible components
- Use Tailwind CSS for styling
- Maintain strict type safety (avoid `any` and `unknown`)
- Keep components "dumb" with logic in domain components
- Limit file size to 150 lines
- Prefer custom hooks over complex component logic
- Abstract repeated code (3+ occurrences)

## Recommended VS Code Extensions

- **ESLint** - For code linting
- **Tailwind CSS IntelliSense** - For Tailwind class suggestions
- **TypeScript and JavaScript Language Features** - For TypeScript support
- **GitLens** - For enhanced Git functionality

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
