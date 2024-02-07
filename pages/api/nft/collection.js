const sdk = require('api')('@opensea/v2.0#hbu2zlsaz6n88');

export default async function handler(req, res) {
    const { address } = req.query;
    sdk.auth(process.env.OPENSEA_KEY);
    sdk.server('https://api.opensea.io');
    res.setHeader('Cache-Control', 's-maxage=86400');
    sdk.get_contract({ chain: 'ethereum', address: address })
        .then(function ({ data }) {
            sdk.get_collection({ collection_slug: data.collection })
                .then(({ data }) => res.status(200).json(data))
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));

}

