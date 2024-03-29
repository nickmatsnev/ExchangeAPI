# Exchange API
## Intro

Hello, welcome to my implementation of the Interview Assignment for the position of Backend Developer, which tasl is to make end points for currency exchange rates and they are thoroughly described in the [task file](task.md).

## Prerequisites

To use the following API endpoints you should have installed on your computer following software:

- [npm](https://docs.npmjs.com/cli/v8/commands/npm-install)

- [next.js](https://nextjs.org/docs)

- [TypeScript](https://www.typescriptlang.org/download)

- [node.js](https://nodejs.org/en/download/)

## Installation

### Linux&Mac&WSL

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/minmax](http://localhost:3000/api/minmax). This endpoint can be edited in `pages/api/minmax.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React routing.



## Running tests

I have provided simple `node-mocks-http` tests in the folder [`__tests__`](/currency_exchange/__tests__/), even though you can find better solutions at [testing section of next.js documentation](https://nextjs.org/docs/testing).

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) .
