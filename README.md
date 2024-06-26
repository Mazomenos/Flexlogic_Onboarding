This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Migrate Database

To be able to migrate and run the seeder first make sure to have all the necessary configurations if you want to run it locally since we are using mongoDB as the main database so you'll need a replica set which you can find how to do it here [Documentation](https://pris.ly/d/mongodb-replica-set)
We recommend doing it directly on MongoDB Atlas since is easier and faster to set up.

If you have your database in MongoDB ready you just have to run the following lines:

> [!WARNING]
> The seed command will ERASE all documents and collections in the database that have the same name as those defined in the schema. Make sure to back up any necessary data before running the seed command.

```bash
npx prisma generate
# then
npx prisma db seed
```

