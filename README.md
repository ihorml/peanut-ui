This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[peanut.to](https://peanut.to) | [staging.peanut.to](https://staging.peanut.to)

## Getting Started

First install the dependencies (location: root folder):

```bash
yarn install
# or
npm install
```

Secondly, copy the .env.example to .env and fill in the values:
there are 4 .env values:
you can get WalletConnect, Socket.tech and GA (google analytics) from their docs, and reach out to us for the Peanut api key.

```bash
cp .env.example .env
```

Lastly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
