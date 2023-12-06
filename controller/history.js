const util = require("../utility");

class TransferHistory {

    listTransfers = async(req, res) => {
        try{
    
            const method = 'get';
            const endpoint = 'https://api.paystack.co/transfer';
            
            const data = await util(method, endpoint);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    getTransfer = async(req, res) => {
        try{
            const { transferID } = req.params;
            const method = 'get';
            const endpoint = `https://api.paystack.co/transfer/${transferID}`;
    
            const data = await util(method, endpoint);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }

    verifyTransfer = async(req, res) => {
        try{
            const { reference } = req.params
            const method = 'get';
            const endpoint = `https://api.paystack.co/transfer/verify/${reference}`;

            const data = await util(method, endpoint);
            return res.json(data);
        } catch(error) {
            return res.json(error);
        }
    }
}

const transferHistory = new TransferHistory();
module.exports = transferHistory;