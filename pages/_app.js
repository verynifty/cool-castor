import { Inter } from "next/font/google";
import "../app/globals.css";
import Head from 'next/head'

import { default as React, Suspense, useEffect, useState } from 'react';

import Header from "../components/navigation/header";

const inter = Inter({ subsets: ["latin"] });



export default function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <title>Castor</title>
                <description>Tools to enhance your Farcaster experience</description>
                <meta property="og:image" content="https://castor.musedao.io/opengraph-image.png" />
                <meta name="twitter:image" content="https://castor.musedao.io/twitter-image.pn" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="https://castor.musedao.io" />
                <meta property="og:title" content="Castor: Farcaster tools" />
                <meta property="og:description" content="Tools to enhance your Farcaster experience" />

            </Head>
            <div className={inter.className}>
                <Header />
                <Suspense fallback="Loading...">
                    <Component {...pageProps} />
                </Suspense>
            </div>
        </div>
    );
}
