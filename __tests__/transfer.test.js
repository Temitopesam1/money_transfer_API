const transfer = require('../controller/transfer');
const axios = require('axios');

jest.mock('axios');

describe('Transfer class tests', () => {
  let transferInstance;

  beforeAll(() => {
    transferInstance = transfer;
  });

  it('should initiate a transfer successfully', async () => {
    const mockData = {
        "status": true,
        "message": "Transfer has been queued",
    };
    axios.request.mockResolvedValue({ data: mockData });

    const req = { body: {
            "source": "balance", 
            "reason": "Calm down", 
            "amount":100, 
            "recipient": "RCP_7vtnqef89it72ze",
            "reference": "2962e4e7-e731-4af0-ae6e-75cda3ca256c"
        }
    }
    const res = { json: jest.fn() };

    await transferInstance.initiateTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should finalize a transfer successfully', async () => {
    const mockData = { 
        "status": true,
        "message": "Transfer has been queued",
    }; 
    axios.request.mockResolvedValue({ data: mockData });

    const req = { body: {
        "transfer_code": "TRF_hn0sp79pk5b56wu6", 
        "otp": "363315"
      } };
    const res = { json: jest.fn() };

    await transferInstance.finalizeTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it('should handle errors during initiation', async () => {
    const mockError = undefined;
    axios.request.mockRejectedValue(mockError);

    const req = { body: {
        "source": "balan", 
        "reason": "Calm down", 
        "amount":100, 
        "recipient": "RCP_7vtnqef89it72ze"
      } 
    };
    const res = { json: jest.fn() };

    await transferInstance.initiateTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockError);
  });

  it('should handle errors during finalization', async () => {
    const mockError = undefined;
    axios.request.mockRejectedValue(mockError);

    const req = { body: {
        "transfer_code": "TRF_hn0sp79pk5b56wu6", 
        "otp": "363315"
      } };
    const res = { json: jest.fn() };

    await transferInstance.finalizeTransfer(req, res);

    expect(res.json).toHaveBeenCalledWith(mockError);
  });
});
