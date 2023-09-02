import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

// unprotected routes (pages that can be accessed without an active user session)

const publicPages = ["/", "/sign-in/[[...index]]", "/sign-up/[[///index]]"];

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>User Switching App using Clerk</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*If the route is for home, sign-in or sign-up: show them without checks*/}

      {publicPages.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Component {...pageProps} />
          </SignedIn>

          <SignedOut>
            <main>
              <p>
                Please{" "}
                <Link href="/sign-in">
                  <a>Sign In</a>
                </Link>{" "}
                to access the page
              </p>
            </main>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default MyApp;