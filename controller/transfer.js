const axios = require('axios');
const https = require('https');
const qs = require('querystring');

const agent = new https.Agent({
    rejectUnauthorized: false,
});

// const secret = process.env.SECRET || "sk_test_74d00f113a4eccad19160a24e9d7355730a5d3c0";

class Transfer {

    initiateTransfer = async (req, res) => {
        
        try {
            const body = qs.stringify(req.body);

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.paystack.co/transfer',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`, 
                  'Cookie': '__cf_bm=tHUgf3kcySKrWyBIHf3lMZgxSbMmxC5DKG4P76uwHyM-1700715897-0-AdQREXL6TtZZ9Z8CokuL2lE/Op7pi6ao6MqLWube1c/KnmMZugs6pUTcKqtz42twA9aJvcIGNNmc60SZovxYluE=; sails.sid=s%3An48s7-wUVbvACW_Ipc9ipinNagpeHddH.W12xkkKlXJqxScSQHFAZMzVNvKubk4ZYpg2xj1GfMkA'
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

    finalizeTransfer = async (req, res) => {
        
        try {
            const body = qs.stringify(req.body);

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api.paystack.co/transfer/finalize_transfer',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded', 
                    'Accept': 'application/json', 
                    'Authorization': `Bearer ${process.env.SECRET}`, 
                  'Cookie': '__cf_bm=tHUgf3kcySKrWyBIHf3lMZgxSbMmxC5DKG4P76uwHyM-1700715897-0-AdQREXL6TtZZ9Z8CokuL2lE/Op7pi6ao6MqLWube1c/KnmMZugs6pUTcKqtz42twA9aJvcIGNNmc60SZovxYluE=; sails.sid=s%3An48s7-wUVbvACW_Ipc9ipinNagpeHddH.W12xkkKlXJqxScSQHFAZMzVNvKubk4ZYpg2xj1GfMkA'
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
}

const transfer = new Transfer();
module.exports = transfer;