import DataTable from 'react-data-table-component';

import { useEffect, useState } from "react";

export default function Home(props) {

    const [isSignedIn, setIsSignedIn] = useState(false);
    const [maxFollowers, setMaxFollowers] = useState(0);
    const [maxFollowing, setMaxFollowing] = useState(0);

    const columns = [
        {
            name: 'Name',
            selector: row => row.username,
            sortable: true,
            cell: row => <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={row.pfp.url} />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{row.displayName}</div>
                    <div className="text-sm opacity-50">@{row.username}</div>
                </div>
            </div>
        },
        {
            name: 'Since',
            selector: row => row.timestamp,
            sortable: true,
         
        },
        {
            name: 'Follower Count',
            selector: row => row.followerCount,
            sortable: true,
            cell: row => <div>
                <div>{row.followerCount}</div> <progress className="progress w-56" value={row.followerCount} max={maxFollowers}></progress>
            </div>


        },
        {
            name: 'Following Count',
            selector: row => row.followingCount,
            sortable: true,
            cell: row => <div>
                <div>{row.followingCount}</div> <progress className="progress w-56" value={row.followingCount} max={maxFollowing}></progress>
            </div>

        },
    ];

    useEffect(() => {
        let following = 0;
        let followers = 0;
        for (let user of props.users) {
            if (user.followerCount > followers) {
                followers = user.followerCount;
            }
            if (user.followingCount > following) {
                following = user.followingCount
            }
        }
        setMaxFollowers(followers);
        setMaxFollowing(following);



    }, [
        props.users
    ]);

    if (isSignedIn) {
        return <div></div>
    }

    return (
        <div>
            <DataTable
                columns={columns}
                data={props.users}
            />
        </div>
    );
}
