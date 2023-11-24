const recipient = require('../controller/recipient');
const axios = require('axios');

jest.mock('axios');

describe('Recipient class tests', () => {
  let recipientInstance;

  beforeAll(() => {
    recipientInstance = recipient;
  });

  it('should create a recipient successfully', async () => {
    const mockData = { "status": true,
    "message": "Transfer recipient created successfully", };
    axios.request.mockResolvedValue({ data: mockData });

    const req = { body: {
        "type": "nuban",
        "name": "Ada Lovelace",
        "account_number": "0000000000",
        "bank_code": "057",
        "description": "Keeps our servers running",
        "currency": "NGN" 
      } };
    const res = { json: jest.fn() };

    await recipientInstance.createRecipient(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should handle errors during recipient creation', async () => {
    const mockError = {
        "status": false,
        "message": "No Authorization Header was found"
      };
    axios.request.mockRejectedValue(mockError);

    const req = { body: {
        "type": "nuban",
        "name": "Ada Lovelace",
        "account_number": "0000000000",
        "bank_code": "057",
        "description": "Keeps our servers running",
        "currency": "NGN" 
      } };
    const res = { json: jest.fn() };

    await recipientInstance.createRecipient(req, res);

    expect(res.json).toHaveBeenCalledWith(mockError);
  });
});
