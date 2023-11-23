const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
    rejectUnauthorized: false,
});

class TransferHistory {

    listTransfers = async(req, res) => {
        try{
    
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.paystack.co/transfer',
                headers: { 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`, 
                    'Cookie': '__cf_bm=wUWpqRjM4rrjehYYt8RYmlr6cG7.DzVM6VYEUwJ4yZ4-1700714793-0-AdNVrhqlqbpVvMrFCj4ovx9q6fJ9gu5gxE/kqwREiWTraSrRrbS7KiOfAySXHxkSGvJ7TmsjV2+Nlq42qAq33SA=; sails.sid=s%3AQz54u0cA3SWZy-Y29DCf3oUS4Q44AKa6.5NLMVmXhFPK8z%2FhM4ZfPf0qOL3lZcNsep3njp1jEYPA'
                },
                httpsAgent: agent,
            }
    
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    getTransfer = async(req, res) => {
        try{
            const { transferID } = req.params;
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.paystack.co/transfer/${transferID}`,
                headers: { 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`, 
                    'Cookie': '__cf_bm=wUWpqRjM4rrjehYYt8RYmlr6cG7.DzVM6VYEUwJ4yZ4-1700714793-0-AdNVrhqlqbpVvMrFCj4ovx9q6fJ9gu5gxE/kqwREiWTraSrRrbS7KiOfAySXHxkSGvJ7TmsjV2+Nlq42qAq33SA=; sails.sid=s%3AQz54u0cA3SWZy-Y29DCf3oUS4Q44AKa6.5NLMVmXhFPK8z%2FhM4ZfPf0qOL3lZcNsep3njp1jEYPA'
                },
                httpsAgent: agent,
            }
    
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    verifyTransfer = async(req, res) => {
        try{
            const { reference } = req.params
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.paystack.co/transfer/verify/${reference}`,
                headers: { 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`, 
                    'Cookie': '__cf_bm=wUWpqRjM4rrjehYYt8RYmlr6cG7.DzVM6VYEUwJ4yZ4-1700714793-0-AdNVrhqlqbpVvMrFCj4ovx9q6fJ9gu5gxE/kqwREiWTraSrRrbS7KiOfAySXHxkSGvJ7TmsjV2+Nlq42qAq33SA=; sails.sid=s%3AQz54u0cA3SWZy-Y29DCf3oUS4Q44AKa6.5NLMVmXhFPK8z%2FhM4ZfPf0qOL3lZcNsep3njp1jEYPA'
                },
                httpsAgent: agent,
            }
    
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }
}

const transferHistory = new TransferHistory();
module.exports = transferHistory;