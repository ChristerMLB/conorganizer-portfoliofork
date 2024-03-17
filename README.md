A fork of Conorganizer (https://github.com/Regncon/conorganizer) made to show the state of the app in late 2023, for the sake of my portfolio.

At that point, Conorganizer was a simple app for reading the program for the role playing convention Regncon, and for registering for the different events.

Registration consisted in assigning your interest in the events on a scale of 0-3 (not interested to very interested), and then participants were assigned to events based on that. While most conventions do registration based on the principle of first-come-first-served (FCFS), our experience is that this method means that more people get to do something they're motivated for during the con. A lot of first-timers and young participants tend to be quite late to register, meaning that FCFS works against them when registrations are processed, which again is bad for growing the convention.

The codebase is not beautiful, and the site won't win any design awards, as it was hacked together to be a MVP for the convention. However, it was stable, and feedback from congoers was positive.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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
