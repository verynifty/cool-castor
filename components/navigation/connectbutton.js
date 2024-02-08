'use client'

import { useCallback, useEffect, useState } from "react";

export default function Home() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {

        window.onSignInSuccess = async (data) => {
            localStorage.setItem("fid", data.fid);
            localStorage.setItem("signer", data.signer_uuid);
            const res = await fetch(
                `/api/user/get?fid=${data.fid}`
            );
            const user = await res.json();
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("connected", true);

            setIsSignedIn(true);
            if (window && window.sa_event) return window.sa_event("signedup", {
                fid: user.fid,
                username: user.username
            });
            location.reload();
        };

        if (localStorage.getItem("connected") == "true") {
            setIsSignedIn(true);
        }

        // Identify or create the script element
        let script = document.getElementById(
            "siwn-script"
        );

        if (!script) {
            script = document.createElement("script");
            script.id = "siwn-script";
            document.body.appendChild(script);
        }

        // Set attributes and source of the script
        script.src = "https://neynarxyz.github.io/siwn/raw/1.2.0/index.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);


        
    }, [
    ]);

    if (isSignedIn)  {
        return <div></div>
    }

    return (
        <div>
            <div
                className="neynar_signin mt-6"
                data-client_id="1989362d-385f-47da-9ad4-945b49afb49c"
                data-success-callback="onSignInSuccess"
            ></div>
        </div>
    );
}
