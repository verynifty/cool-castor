import DataTable from 'react-data-table-component';

import { useEffect, useState } from "react";

export default function Home(props) {

    const [isSignedIn, setIsSignedIn] = useState(false);
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
            name: 'Follower Count',
            selector: row => row.followerCount,
            sortable: true,

        },
        {
            name: 'Following Count',
            selector: row => row.followingCount,
            sortable: true,

        },
    ];

    useEffect(() => {




    }, [
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
