import { NeynarAPIClient } from "@neynar/nodejs-sdk";
const sdk = require('api')('@neynar/v2.0#7zw16ls6rtlto');


const client = new NeynarAPIClient(process.env.NEYNAR_KEY);

export default async function handler(req, res) {
    // get query parameter of nft collection
    const { fids } = req.query;
    const { signer } = req.query;
    console.log("FOLLWOING USER: ", fids, signer);
    let r = await sdk.followUser({ target_fids: fids.split(','), signer_uuid: signer }, { api_key: process.env.NEYNAR_KEY });
    console.log(r);
    res.status(200).json(r);
}
