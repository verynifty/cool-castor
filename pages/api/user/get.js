import { NeynarAPIClient } from "@neynar/nodejs-sdk";
const sdk = require('api')('@neynar/v2.0#7zw16ls6rtlto');


const client = new NeynarAPIClient(process.env.NEYNAR_KEY);

export default async function handler(req, res) {
    // get query parameter of nft collection
    const { fid } = req.query;

    sdk.userBulk({ fids: fid, api_key: process.env.NEYNAR_KEY })
        .then(({ data }) => res.status(200).json(data.users[0]))
        .catch(err => console.error(err));
    
}
