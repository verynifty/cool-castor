'use client'

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'

export default function NFTHolders({ props }) {

    const router = useRouter()

    const [users, setUsers] = useState([]);
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        async function getNFTData(address) {
            console.log(router)
            const res = await fetch(
                `/api/nft/holders?collection=${address}`
            );
            const data = await res.json();
            console.log(data);
            setUsers(data);
            console.log(users);
            setIsLoading(false);
        }

        if (router.isReady) {
            setAddress(router.query.address);
            getNFTData(router.query.address);
        }
        // fetch data from API
    }
        , [router.isReady]);

    function getUsers() {
        let result = users.filter(user => user.profile != null);
        console.log(result)
        return result;
    }
    if (isLoading) {
        return <div><center className='mt-40'>
            <span className="loading loading-bars loading-lg"></span>
            <div>Loading...</div>
        </center>
        </div>
    }
    return (
        <div>
            <center className='text-3xl font-bold tracking-tight my-10'>Farcaster users for collection {address}</center>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Holding</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {getUsers().map((user) => (
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <a target='_blank' href={`https://warpcast.com/${user.profile.username}`} className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.profile.pfp_url} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </a>
                                        <a target='_blank' href={`https://warpcast.com/${user.profile.username}`}  >
                                            <div ><span className="font-bold">{user.profile.displayName}</span><span className='ml-2'>@{user.profile.username}</span></div>
                                            <div className="text-sm opacity-50">Followers: {user.profile.follower_count} Following: {user.profile.following_count}</div>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    {user.tokenBalances.length} Nfts
                                </td>
                                <th>
                                    <a target='_blank' href={`https://warpcast.com/${user.profile.username}`} className="btn btn-primary">See on warp cast</a>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );

}
