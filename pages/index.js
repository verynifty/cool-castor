import { useEffect, useRef, useState } from 'react';

export default function NFTHolders({ }) {

    const [collections, setCollections] = useState([]);


    useEffect(() => {

        async function load() {
            const res = await fetch(
                `/api/nft/collections`
            );
            const data = await res.json();
            console.log(data)
            setCollections(data);
        }
        load();
    }
        , []);

    return (
        <div>
            <div className="hero min-h-96 bg-base-200">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold">Make friends on Farcaster</h1>
                        <p className="py-6">Find people to follow based on the NFTs they hold!</p>
                    </div>
                </div>
            </div>
            <center className='text-3xl font-bold tracking-tight my-10'>Type NFT contract address</center>


            <center className='text-3xl font-bold tracking-tight my-10'>Or pick a popular collection</center>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {collections.map((collection) => (
                    <a href={`/nft/holders/${collection.addresses[0].address}`} className='col-span-1 flex flex-col '>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={collection.imageUrl} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{collection.name}</h2>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );

}
