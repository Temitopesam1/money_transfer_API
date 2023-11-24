const transferHistory = require('../controller/history');
const axios = require('axios');

jest.mock('axios');

describe('TransferHistory class tests', () => {
  let transferHistoryInstance;

  beforeAll(() => {
    transferHistoryInstance = transferHistory;
  });

  it('should list transfers successfully', async () => {
    const mockData = {
        "status": true,
        "message": "Transfer retrieved", 
    };
    axios.request.mockResolvedValue({ data: mockData });

    const req = {};
    const res = { json: jest.fn() };

    await transferHistoryInstance.listTransfers(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should get a transfer successfully', async () => {
    const mockData = { "status": true,
    "message": "Transfer retrieved" };
    axios.request.mockResolvedValue({ data: mockData });

    const req = { params: { transferID: '397600503' } };
    const res = { json: jest.fn() };

    await transferHistoryInstance.getTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should verify a transfer successfully', async () => {
    const mockData = { "status": true,
    "message": "Transfer retrieved" };
    axios.request.mockResolvedValue({ data: mockData });

    const req = { params: { reference: '59rlf4b37jkm60nst7pr' } };
    const res = { json: jest.fn() };

    await transferHistoryInstance.verifyTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should handle errors during listing transfers', async () => {
    const mockError = { message: 'Request failed with status code 404' };
    axios.request.mockRejectedValue(mockError);

    const req = {};
    const res = { json: jest.fn() };

    await transferHistoryInstance.listTransfers(req, res);

    expect(res.json).toHaveBeenCalledWith(mockError);
  });

  it('should handle errors during getting a transfer', async () => {
    const mockError = { message: 'An error occurred' };
    axios.request.mockRejectedValue(mockError);

    const req = { params: { transferID: '397600503' } };
    const res = { json: jest.fn() };

    await transferHistoryInstance.getTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockError);
  });

  it('should handle errors during verifying a transfer', async () => {
    const mockError = {
        "status": false,
        "message": "No Authorization Header was found"
      };
    axios.request.mockRejectedValue(mockError);

    const req = { params: { reference: '59rlf4b37jkm60nst7pr' } };
    const res = { json: jest.fn() };

    await transferHistoryInstance.verifyTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockError);
  });
});
