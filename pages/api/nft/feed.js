const { Network, Alchemy } = require('alchemy-sdk');
const settings = {
    apiKey: process.env.ALCHEMY_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

import { NeynarAPIClient, FeedType, FilterType } from "@neynar/nodejs-sdk";
const sdk = require('api')('@neynar/v2.0#7zw16ls6rtlto');


const client = new NeynarAPIClient(process.env.NEYNAR_KEY);

export default async function handler(req, res) {
    // get query parameter of nft collection
    const { collection } = req.query;
    let owners = (await alchemy.nft.getOwnersForContract(collection, {
        withTokenBalances: true
    })).owners;
    let promises = [];
    let i = 0;
    let addresses = "";
    let mapping = {};
    
    for (const owner of owners) {
        mapping[owner.ownerAddress.toLocaleLowerCase()] = owner;
        if (addresses.length > 0) {
            addresses += ",";
        }
        addresses += owner.ownerAddress;
        i++;
        
        if (i > 320) {
            promises.push(sdk.userBulkByAddress({addresses: addresses, api_key: process.env.NEYNAR_KEY}));
            i = 0;
            addresses = "";
        }
    }
    if (addresses.length > 0) {
        promises.push(sdk.userBulkByAddress({addresses: addresses, api_key: process.env.NEYNAR_KEY}));
    }

    const users = await Promise.allSettled(promises);
    let counter = 0;
    let fids = [];
    users.forEach(res => {
        if (res.status == 'fulfilled') {
            console.log(res.value)
            let result = res.value.data;
            for (const address in result) {
                if (Object.hasOwnProperty.call(result, address)) {
                    const element = result[address];
                    fids.push(element[0].fid);
                }
            }
        } else {
        }
        counter++;
    });
    console.log("GETFEED")
    const feed = await client.fetchFeed(FeedType.Filter, {
        filterType: FilterType.Fids,
        fids
      });
      console.log(feed)
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json(feed)
}
