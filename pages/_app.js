import { Inter } from "next/font/google";
import "../app/globals.css";
import Head from 'next/head'
import Script from 'next/script';

import { default as React, Suspense, useEffect, useState } from 'react';

import Header from "../components/navigation/header";

const inter = Inter({ subsets: ["latin"] });

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <title>Castor</title>
                <meta property="og:image" content="https://castor.musedao.io/opengraph-image.png" />
                <meta name="twitter:image" content="https://castor.musedao.io/twitter-image.pn" />
                <meta name="twitter:card" content="summary_large_image" />
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
            <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
            <noscript>
                {/* eslint-disable @next/next/no-img-element */}
                <img
                    src="https://queue.simpleanalyticscdn.com/noscript.gif"
                    alt=""
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </noscript>
            <ToastContainer />
        </div>
    );
}
