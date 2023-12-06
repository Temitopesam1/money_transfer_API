const util = require("../utility");
const qs = require('querystring');


class Recipient {

    createRecipient = async(req, res) => {
        try{
            const body = qs.stringify(req.body);
            const method = 'post';
            const endpoint = 'https://api.paystack.co/transferrecipient';
    
            const data = await util(method, endpoint, body);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    getRecipient = async(req, res) => {
        try {
            const { code } = req.params;
            const method = 'get';
            const endpoint = `https://api.paystack.co/transferrecipient/${code}`;

            const data = await util(method, endpoint);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    updateRecipient = async(req, res) => {
        try {
            const body = qs.stringify(req.body);
            const { recipientCode } = req.params;
            const method = 'put';
            const endpoint = `https://api.paystack.co/transferrecipient/${recipientCode}`;
    
            const data = await util(method, endpoint, body);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    deleteRecipient = async(req, res) => {
        try {
            const { code } = req.params;
            const method = 'put';
            const endpoint = `https://api.paystack.co/transferrecipient/${code}`;

            const data = await util(method, endpoint, body);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }


    listRecipients = async(req, res) => {
        try {
            const method = 'get';
            const endpoint = `https://api.paystack.co/transferrecipient`;

            const data = await util(method, endpoint, body);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }
}

const recipient = new Recipient();
module.exports = recipient;