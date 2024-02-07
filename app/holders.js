
"use client";

import { useEffect, useRef, useState } from 'react';

export default function NFTHolders({  }) {

    useEffect(() => {

        async function getNFTData(collection) {

            const res = await fetch(
				`/api/nft/holders?collection=${collection}`
			);
			const data = await res.json();
        }

        getNFTData("0xf9267911480fb5ce2ff2b4deb1295d9b2ab5bb69");

        // fetch data from API
    }
    , []);

    return (
        <div>
            Hello
        </div>
    );

}