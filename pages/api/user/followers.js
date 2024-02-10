import { NeynarAPIClient } from "@neynar/nodejs-sdk";
const sdk = require('api')('@neynar/v2.0#66h3glq5brsni');


const client = new NeynarAPIClient(process.env.NEYNAR_KEY);

export default async function handler(req, res) {
    // get query parameter of nft collection
    const { fid } = req.query;
    const followers = [];
    let cursor = null;
    let r = await sdk.followers({ fid: fid, cursor: cursor, limit: 25, api_key: process.env.NEYNAR_KEY });
    res.status(200).json(r.data.result.users);
}
