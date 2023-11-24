const axios = require('axios');
const https = require('https');
const qs = require('querystring');

const agent = new https.Agent({
    rejectUnauthorized: false,
});

const secret = process.env.SECRET;


class Recipient {

    createRecipient = async(req, res) => {
        try{
            const body = qs.stringify(req.body);
    
            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.paystack.co/transferrecipient',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${secret}`, 
                    'Cookie': '__cf_bm=wUWpqRjM4rrjehYYt8RYmlr6cG7.DzVM6VYEUwJ4yZ4-1700714793-0-AdNVrhqlqbpVvMrFCj4ovx9q6fJ9gu5gxE/kqwREiWTraSrRrbS7KiOfAySXHxkSGvJ7TmsjV2+Nlq42qAq33SA=; sails.sid=s%3AQz54u0cA3SWZy-Y29DCf3oUS4Q44AKa6.5NLMVmXhFPK8z%2FhM4ZfPf0qOL3lZcNsep3njp1jEYPA'
                },
                data: body,
                httpsAgent: agent,
            }
    
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    getRecipient = async(req, res) => {
        try {
            const { code } = req.params;
            config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.paystack.co/transferrecipient/${code}`,
                headers: { 
                  'Accept': 'application/json', 
                  'Authorization': `Bearer ${process.env.SECRET}`, 
                },
                httpsAgent: agent
            };
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    updateRecipient = async(req, res) => {
        try {
            const body = qs.stringify(req.body);
            const { recipientCode } = req.params;
    
            const config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `https://api.paystack.co/transferrecipient/${recipientCode}`,
            
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`, 
                    // 'Cookies': '__cf_bm=wNkQA6PhKQIhvCIe3WpWNaEEDy8ecZfldg_aoFltDPg-1700719897-0-AehkqoUm8QwgTM3Q2kh4dI0XU0OwqlvXbUQekiX4ohMPrb0M4ExEcDGk0AFVcMxWn9tTOO6Z5Lsq/03wKiBucmU=; sails.sid=s%3AjEpxkHTnXgR6x2-hnpQanXRiFFq8FGAJ.NJ5N8hEI71sX127s6RP3m4MaToTlIM2xSPleg8v9%2BiU'
                },
                data: body,
                httpsAgent: agent,
            }
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    deleteRecipient = async(req, res) => {
        try {
            const { code } = req.params;
            config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: `https://api.paystack.co/transferrecipient/${code}`,
                headers: { 
                  'Accept': 'application/json', 
                  'Authorization': `Bearer ${process.env.SECRET}`, 
                  'Cookie': '__cf_bm=wUWpqRjM4rrjehYYt8RYmlr6cG7.DzVM6VYEUwJ4yZ4-1700714793-0-AdNVrhqlqbpVvMrFCj4ovx9q6fJ9gu5gxE/kqwREiWTraSrRrbS7KiOfAySXHxkSGvJ7TmsjV2+Nlq42qAq33SA=; sails.sid=s%3AFA4YdK_YoPnkTazkVcQgr5d7u9ukeN5x.kfTUV8xLPT%2FBnia0bxd96ynFiq4E5zJnAO3YPQ6qLFE'
                },
                httpsAgent: agent
            };
            const { data } = await axios.request(config)
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }


    listRecipients = async(req, res) => {
        try {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://api.paystack.co/transferrecipient',
                headers: { 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`,
                    'Cookie': '__cf_bm=AnGP4Mu.KMiMpOfYfwyOriGaRSH6XXkI_xINIWDAGy4-1700718580-0-AWcUTw+MOR8+DDemzvPpNbG89eGIuBKuwv4nXL50lWEclkQRi72O5VyhKgnsjW8yGaB2dhJZIMoej/7d2tzk1NM=; sails.sid=s%3A7FI70ZTtbnbDbSJV8ZubuDWR860rde-j.S55G%2FMq8YKcEUovSYkRr0WsZQrWuiMeqeqGs4wSdAzY'
                },
                httpsAgent: agent,
            };

            const { data } = await axios.request(config);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }
}

const recipient = new Recipient();
module.exports = recipient;