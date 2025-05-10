# API Client for typescript-fetch

This is an auto-generated SDK for the API.

## Example Usage

```ts
// DISCLAIMER: This is an auto-generated example and library.
// This lib has NOT been tested by our support team.
// Please use at your own risk, and make tests before using it.
//
// install using "npm i -s @exapi/api-client-typescript-fetch"
import { Configuration, DefaultApi } from '@exapi/api-client-typescript-fetch';

const config = new Configuration({
  basePath: 'https://api.exkoin.com',
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET'
});

const api = new DefaultApi(config);

async function getAccountBalance() {
  try {
    const balance = await api.getBalance();
    console.log('Account balance:', balance);
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}

getAccountBalance();
```