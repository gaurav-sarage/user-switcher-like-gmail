import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";

import { useRouter } from "next/router";

import Head from "next/head";

import Link from "next/link";

// pages that can be accessed without an active user session.

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[...index]]"];

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ClerkProvider {...pageProps} publishableKey={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API} >
      <Head>
        <title>Clerk app</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*If the route is for the home, sign-in and sign-up pages: show them without checks.*/}

      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          {/*Show all pages if the user is signed in*/}

          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>

          {/*Ask to sign in if the user isn't signed in*/}

          <SignedOut>
            <main>
              <p>
                Please{" "}
                <Link href="/sign-in">
                  <a>sign in</a>
                </Link>{" "}
                to access this page.
              </p>
            </main>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default MyApp;
