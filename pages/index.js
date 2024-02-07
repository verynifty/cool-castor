import { useEffect, useRef, useState } from 'react';

export default function NFTHolders({ }) {

    const [collections, setCollections] = useState([]);
    const [address, setAddress] = useState("");


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

        function seeNFT() {
            window.location.href = `/nft/holders/${address}`;
        }

    return (
        <div>
            <div className="hero min-h-96 bg-base-200">
                <div className="hero-content text-center">
                    <div>
                        <h1 className="text-5xl font-bold text-primary">Find friends on Farcaster</h1>
                        <p className="py-6">Find who to follow based on the NFTs they hold!</p>
                    </div>
                </div>
            </div>

            <center className='text-3xl text-accent font-bold tracking-tight my-10'>Type an NFT contract address</center>
            <center> <div className="join">
                <input value={address}
                    onChange={e => setAddress(e.target.value)} className="input input-lg input-bordered join-item" placeholder="0x3432..." />
                <button onClick={seeNFT} className="btn btn-lg btn-primary join-item rounded-r-full">Search</button>
            </div></center>
            <div className="divider divider-accent mt-20">OR</div>
            <center className='text-3xl  text-accent font-bold tracking-tight mt-20 mb-10'>pick a popular collection</center>
            <div className='grid p-5 grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {collections.map((collection) => (
                    <a href={`/nft/holders/${collection.addresses[0].address}`} className='col-span-1 flex flex-col '>
                        <div className="card card-compact bg-base-300 shadow-xl">
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
