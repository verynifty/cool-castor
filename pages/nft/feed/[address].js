'use client'

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


export default function NFTHolders({ props }) {

    const router = useRouter()

    const [feed, setFeed] = useState([]);
    const [address, setAddress] = useState('');
    const [collection, setCollection] = useState({

    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function getNFTData(address) {
            const c = await fetch(
                `/api/nft/collection?address=${address}`
            );
            let collect = await c.json();
            setCollection(collect);
            console.log(collect);
            const res = await fetch(
                `/api/nft/feed?collection=${address}`
            );
            const data = await res.json();

            console.log(data);
            setFeed(data);
            console.log(data)
            setIsLoading(false);
        }

        if (router.isReady) {
            setAddress(router.query.address);
            getNFTData(router.query.address);
        }
        // fetch data from API
    }
        , [router.isReady]);


    if (isLoading) {
        return <div><center className='mt-40'>
            <span className="loading loading-bars loading-lg"></span>
            <div>Loading...</div>
        </center>
        </div>
    }
    return (
        <div>
            <div>
            </div>
            <div className="hero " style={{ backgroundImage: `url(${collection.banner_image_url})` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <center className='text-3xl text-accent font-bold tracking-tight my-10'>Farcaster holders of {collection.name}</center>

                    </div>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-bordered tabs-lg">
                <a role="tab" href={`/nft/holders/${address}`} className="tab ">Holders</a>
                <a role="tab" className="tab tab-active">Feed</a>
            </div>
            {feed.casts.map((cast) => (
                <div className="card w-96 mt-5 bg-neutral shadow-xl">
                    {cast.embeds.length > 0 && cast.embeds[0].url != null && (cast.embeds[0].url.endsWith("jpg") || cast.embeds[0].url.endsWith("gif") || cast.embeds[0].url.endsWith("png")) ? <figure><img src={cast.embeds[0].url}  /></figure>
                        : <div></div>}
                    <div className="card-body">
                        <p className="text-bold">
                            {cast.text}
                        </p>
                        <p>{cast.author.display_name} - @{cast.author.username}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{cast.reactions.likes.length} Likes</div>
                            <div className="badge badge-outline">{cast.reactions.recasts.length} Likes</div>
                        </div>
                    </div>
                </div>

            ))}


        </div>
    );

}
