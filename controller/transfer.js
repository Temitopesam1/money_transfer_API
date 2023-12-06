const util = require("../utility");
const qs = require('querystring');
const { v4: uuidv4 } = require('uuid');


class Transfer {

    initiateTransfer = async (req, res) => {
        
        try {
            let body = req.body;
            body['reference'] = uuidv4();
            body = qs.stringify(body);
            const method = 'post';
            const endpoint = 'https://api.paystack.co/transfer';

            const data = await util(method, endpoint, body);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    finalizeTransfer = async (req, res) => {
        
        try {
            const body = qs.stringify(req.body);
            const method = 'post';
            const endpoint = 'https://api.paystack.co/transfer/finalize_transfer';

            const data = await util(method, endpoint, body);
            return res.json(data);;
        } catch(error) {
            return res.json(error);
        }
    }
}

const transfer = new Transfer();
module.exports = transfer;