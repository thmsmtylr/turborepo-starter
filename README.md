# Turborepo starter (Next.js, TypeScript, Docker, ESLint, Jest, Prettier, Rollup.js, Tailwind, Storybook)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/thmsmtylr/turborepo-starter/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/thmsmtylr/turborepo-starter/tree/main)[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=thmsmtylr_turborepo-starter&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=thmsmtylr_turborepo-starter)

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `admin`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by `docs`, `web`, and `admin` applications
- `storybook`: a [Storybook.js](https://storybook.js.org/) app
- `config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
- [Rollup.js](https://rollupjs.org) module bundler for packaging the component library
- [GitHub Actions](https://docs.github.com/en/actions) for publishing the component library
- [Docker](https://www.docker.com/) as an alternative build/development tool
- [Tailwind](https://tailwindcss.com/) a utility first css framework for styling
- [Storybook.js](https://storybook.js.org/) build component driven UIs faster

### Build

To build all apps and packages, run the following command:

```
cd turborepo-starter
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd turborepo-starter
yarn run dev
```

or

```
cd turborepo-starter
docker-compose up --build
```

### UI

Todo

### Vercel Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthmsmtylr%2Fturborepo-starter)

Each app in your `apps` directory will need to be deployed as seperate projects. See `vercel.json` for Vercel deployment configuration.

### Remote Caching

Turborepo can use a technique known as [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching (Beta) you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd turborepo-starter
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
