# Money Transfer API

This project provides a small set of RESTful API endpoints for making money transfers using a payment gateway provider in Nigeria. It also allows users to list and search their transfer history.

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Live Demo](#live-demo)


## Requirements

- This project uses a payment gateway provider in Nigeria (Paystack). Ensure you have API credentials and access to their documentation.
- Node.js and npm should be installed on your machine.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Temitopesam1/money_transfer_API.git
   ```

2. Change into the project directory:

   ```bash
   cd money_transfer_API
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

   Create a `.env` file in the root of the project and add the necessary environment variables, including your payment gateway API credentials.

   ```env
   SECRET=your-api-key
   ```

   Make sure to replace `your-api-key` with your actual API key.

5. Start the application:

   ```bash
   npm run start
   ```

   The application should now be running on `http://localhost:3000`.

## Usage

- Use the provided API endpoints to initiate transfers, list transfer history, and search for transfers.

## Testing

Run unit and integration tests using the following command:

```bash
npm test
```

## API Documentation

Refer to the [API Documentation](https://documenter.getpostman.com/view/18323626/2s9YeBfZZ8) for details on the available endpoints and how to use them.

## Live Demo

Visit the live demo of the API at [https://your-live-demo-url](https://paystack-money-transfer.onrender.com).



