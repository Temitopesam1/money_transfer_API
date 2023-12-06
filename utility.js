const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false,
});

async function util(){

    const config = {
        method: arguments[0], //'get',
        maxBodyLength: Infinity,
        url: arguments[1], //'https://api.paystack.co/transfer',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded', 
            'Accept': 'application/json', 
            'Authorization': `Bearer ${process.env.SECRET}`,
        },
        data: arguments[2] || null,
        httpsAgent: agent,
    }

    const { data } = await axios.request(config)
    return data;
}

module.exports = util;