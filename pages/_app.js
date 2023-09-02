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
    </ClerkProvider>
  )
}