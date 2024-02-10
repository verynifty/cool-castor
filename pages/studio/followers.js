'use client'

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


export default function NFTHolders({ props }) {

    const router = useRouter()

    const [followers, setFollowers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function getData(address) {
            const userFid = localStorage.getItem('fid');
            const followers = await fetch(
                `/api/user/followers?fid=${userFid}`
            );
            console.log(followers)
            setIsLoading(false);
        }
        getData();

    }
        , []);


    if (isLoading) {
        return <div><center className='mt-40'>
            <span className="loading loading-bars loading-lg"></span>
            <div>Loading...</div>
        </center>
        </div>
    }
    return (
        <div>

        </div>
    );

}
