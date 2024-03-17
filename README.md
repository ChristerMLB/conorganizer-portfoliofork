A fork of Conorganizer (https://github.com/Regncon/conorganizer) made to show the state of the app in late 2023, for the sake of my portfolio. The data from the app has been downloaded to a json-file and authentication is disabled, so you can't log in.

Visit a deployed version here: https://conorganizer-portfoliofork-gmbv.vercel.app/

In late 2023, Conorganizer was a simple app for reading the program for the role playing convention Regncon, and for registering for the different events.

Registration consisted in assigning your interest in the events on a scale of 0-3 (not interested to very interested), and then participants were assigned to events based on that. While most conventions do registration based on the principle of first-come-first-served (FCFS), our experience is that this method means that more people are happy with their convention experience. Especially first-timers and young participants tend to be quite late to register, meaning that FCFS works against them when registrations are processed. We've seen a significant increase in the number of young participants during the years we startet practicing this kind of registration.

The codebase is not beautiful, and the site won't win any design awards, as it was hacked together to be an MVP for the 2023 convention. However, it was stable, and feedback from congoers was positive.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter and EB Garamond, custom Google Fonts.
