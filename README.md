## Next.js Features I covered While Building This App

- Folder Structure
- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing)
- [Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [File Conventions](https://nextjs.org/docs/app/api-reference/file-conventions)
- [Image optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Rendering (Server vs Client components)](https://nextjs.org/docs/app/building-your-application/rendering)
- [Hydration Error and Solution](#hydration-error-and-solution)
- [Navigation(Links, useRouter, useParams, page params, etc.)](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [Data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Streaming with Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Static and Dynamic SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) vs [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Authentication with Next-Auth & Server Actions](https://next-auth.js.org/)
- [Auth Social Media Sign in with Server Actions](https://next-auth.js.org/providers)
- [Next Auth with User Credentials Tutorial (Email & Password Login)](https://next-auth.js.org/providers/credentials)
- [useFormState (useActionState - React Canary) Hook](https://react.dev/reference/react/useActionState)
- [next-auth middleware - how to protect routes](https://nextjs.org/docs/app/building-your-application/routing/middleware)

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Hydration Error And Solution

There are three possible solutions to prevent the next.js hydration problem:

- we can use useEffect() hook and make sure that our components run on the client side.

  ```
  "use client"
  import { useEffect, useState } from 'react';

  const ComponentName = () => {
    const [isClient, setIsClient] = useState(false);
    const renderOnClient = Math.random();
    ... some other logic

    useEffect(()=>{
      setIsClient(true);
    },[])

    return (
      <>
        <h1>This is use effect approach to prevent hydration problem</h1>
        <div>
        {isClient && renderOnClient }
        </div>
      </h1>
    )

  }

  ```

  As the result of this approach this is going to be rendered only on client side. Hence, the hydration
  problem will be resolved.

- we can disable a SSR for a specific components, for instance:

  1. Create this component ./src/components/HydrationTest.jsx

  ```
    "use client";

    const HydrationTest = ()=>{
      const renderOnClient = Math.random();
      return (
        <>
        <div>HydrationTest Component</div>
        <div>{renderOnCLient}</div>
        </>
      )
    }

    export default HydrationTest;

  ```

  2. Then we are going to use <HydrationTest/> component within parent one and dynamically import it.

  ```
  const HydrationTestWithoutSSR = dynamic(()=>import('@/components/HydrationTest'), {ssr:false});

  const ComponentName = () => {
    ... some other logic

    return (
      <>
        <h1>This is disable SSR for a specific component approach</h1>
        <HydrationTestWithoutSSR/>
      </h1>
    );
  }
  ```

- and the last approach - we can use `suppressHydrationWarning` attribute on the HTML element. For instance:

  ```
    "use client"

    const ComponentName = () => {
      const renderOnClient = Math.random();
      ... some other logic

      return (
        <>
          <h1>This is suppressHydrationWarning approach</h1>
          <div suppressHydrationWarning >{renderOnClient}</div>
        </h1>
      )

    }

  ```

This the one of the most common errors/problems when it comes to rendering a Next.js component.
