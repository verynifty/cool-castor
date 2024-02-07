
export default async function handler(req, res) {
    const result = await fetch(
        `https://api.pro.opensea.io/collections?offset=0&limit=40&fields%5BcreatedDate%5D=1&fields%5BcreatedAt%5D=1&fields%5Bname%5D=1&fields%5Baddress%5D=1&fields%5Baddresses%5D=1&fields%5BimageUrl%5D=1&fields%5BisVerified%5D=1&fields%5Bslug%5D=1&fields%5Bstats.floor_price%5D=1&fields%5Bstats.items_listed%5D=1&fields%5Bstats.num_owners%5D=1&fields%5Bstats.total_supply%5D=1&fields%5Bstats.thirty_day_change%5D=1&fields%5Bstats.thirty_day_difference%5D=1&fields%5Bstats.thirty_day_sales%5D=1&fields%5Bstats.thirty_day_sales_change%5D=1&fields%5Bstats.thirty_day_volume%5D=1&fields%5Bstats.rolling_thirty_day_change%5D=1&fields%5Bstats.rolling_thirty_day_sales%5D=1&fields%5Bstats.rolling_thirty_day_sales_change%5D=1&fields%5Bstats.rolling_thirty_day_volume%5D=1&fields%5Bstats.top_offer_price%5D=1&fields%5Bstats.floor_price_token_price%5D=1&fields%5Bstats.floor_price_token_address%5D=1&fields%5Bstats.floor_price_token_decimals%5D=1&fields%5Bstats.floor_price_token_symbol%5D=1&fields%5BchainName%5D=1&fields%5Bstats.floor_price_30d%5D=1&sort%5Bstats.rolling_thirty_day_volume%5D=-1&filters%5BchainNames%5D%5B%5D=ethereum&filters%5Btrending.top_thirty_day%5D=true`
    );
    const data = await result.json();
    res.status(200).json(data.data)
}

