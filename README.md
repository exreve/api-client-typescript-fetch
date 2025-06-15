# API Client for typescript-fetch

This is an auto-generated SDK for the API.

## Example Usage

```ts
// DISCLAIMER: This is an auto-generated example and library.
// This lib has NOT been tested by our support team.
// Please use at your own risk, and make tests before using it.
//
// install using "npm i -s @exapi/api-client-typescript-fetch"
import { Exchange } from '@exapi/api-client-typescript-fetch';

const exchange = new Exchange({
  domainName: 'exkoin.com',
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_API_SECRET',
  useHmac: true // or false for Basic Auth
});

// Example 1: Get account balances
async function getAccountBalances() {
  try {
    const balances = await exchange.getBalances();
    console.log('Account balances:', balances);
  } catch (error) {
    console.error('Error fetching balances:', error);
  }
}

// Example 2: Get available currencies
async function getCurrencies() {
  try {
    const currencies = await exchange.getCurrencies();
    console.log('Available currencies:', currencies);
  } catch (error) {
    console.error('Error fetching currencies:', error);
  }
}

// Example 3: Get market data
async function getMarketData() {
  try {
    const markets = await exchange.getMarkets();
    console.log('Available markets:', markets);
    
    const orderbook = await exchange.getOrderbook({ symbol: 'BTC/USDT', limit: 10 });
    console.log('BTC/USDT orderbook:', orderbook);
    
    const trades = await exchange.getTrades({ symbol: 'BTC/USDT', limit: 20 });
    console.log('Recent BTC/USDT trades:', trades);
  } catch (error) {
    console.error('Error fetching market data:', error);
  }
}

// Example 4: Place a buy order
async function placeBuyOrder() {
  try {
    const order = await exchange.createOrder({
      symbol: 'BTC/USDT',
      type: 'limit',
      side: 'buy',
      quantity: '0.001',
      price: '45000'
    });
    console.log('Order placed:', order);
  } catch (error) {
    console.error('Error placing order:', error);
  }
}

// Example 5: Get order history
async function getOrderHistory() {
  try {
    const orders = await exchange.getOrders({ 
      symbol: 'BTC/USDT',
      limit: 50 
    });
    console.log('Order history:', orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

// Example 6: Get trade history
async function getTradeHistory() {
  try {
    const trades = await exchange.getUserTrades({ 
      symbol: 'BTC/USDT',
      limit: 100 
    });
    console.log('Trade history:', trades);
  } catch (error) {
    console.error('Error fetching trade history:', error);
  }
}

// Example 7: Cancel an order
async function cancelOrder(orderId: string) {
  try {
    const result = await exchange.cancelOrder({
      order_id: orderId,
      symbol: 'BTC/USDT'
    });
    console.log('Order cancelled:', result);
  } catch (error) {
    console.error('Error cancelling order:', error);
  }
}

// Example 8: Get deposit address
async function getDepositAddress() {
  try {
    const address = await exchange.getDepositAddress({
      currency: 'BTC',
      network: 'BTC'
    });
    console.log('BTC deposit address:', address);
  } catch (error) {
    console.error('Error getting deposit address:', error);
  }
}

// Example 9: Prepare and finish withdrawal
async function withdrawFunds() {
  try {
    // Step 1: Prepare withdrawal
    const preparation = await exchange.prepareWithdrawal({
      currency: 'BTC',
      amount: '0.001',
      address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
      network: 'BTC'
    });
    console.log('Withdrawal prepared:', preparation);
    
    // Step 2: Finish withdrawal (you would get the payload from the preparation response)
    const completion = await exchange.finishWithdrawal({
      payload: preparation.payload // This would come from the prepare response
    });
    console.log('Withdrawal completed:', completion);
  } catch (error) {
    console.error('Error processing withdrawal:', error);
  }
}

// Example 10: Get deposit/withdrawal history
async function getTransactionHistory() {
  try {
    const deposits = await exchange.getDeposits({
      currency: 'BTC',
      limit: 50
    });
    console.log('Deposit history:', deposits);
    
    const withdrawals = await exchange.getWithdrawals({
      currency: 'BTC',
      limit: 50
    });
    console.log('Withdrawal history:', withdrawals);
  } catch (error) {
    console.error('Error fetching transaction history:', error);
  }
}

// Example 11: Join a liquidity pool
async function joinLiquidityPool() {
  try {
    const result = await exchange.joinPool({
      pool_id: 'BTC/USDT',
      max_base_amount: '0.01',
      max_quote_amount: '500',
      min_price: '40000',
      max_price: '50000'
    });
    console.log('Joined pool:', result);
  } catch (error) {
    console.error('Error joining pool:', error);
  }
}

// Example 12: Get pool positions
async function getPoolPositions() {
  try {
    const positions = await exchange.getPoolPositions();
    console.log('Pool positions:', positions);
  } catch (error) {
    console.error('Error fetching pool positions:', error);
  }
}

// Example usage - run all examples
async function runExamples() {
  await getAccountBalances();
  await getCurrencies();
  await getMarketData();
  await getOrderHistory();
  await getTradeHistory();
  await getDepositAddress();
  await getTransactionHistory();
  await getPoolPositions();
  
  // Uncomment to test trading and withdrawals (be careful with real funds!)
  // await placeBuyOrder();
  // await withdrawFunds();
  // await joinLiquidityPool();
}

runExamples();
```