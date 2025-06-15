/**
 * ExKoin API Exchange Client
 * A TypeScript client for interacting with the ExKoin Exchange API
 */
/**
 * Configuration interface for the Exchange client
 */
interface ExchangeConfig {
    /** Domain name of the exchange (e.g., 'exkoin.com') */
    domainName: string;
    /** API key for authentication */
    apiKey?: string;
    /** API secret for authentication */
    secret?: string;
    /** Whether to use HMAC authentication instead of Basic Auth */
    useHmac?: boolean;
}
/**
 * ExKoin Exchange API Client
 * Provides methods to interact with both public and private endpoints
 */
declare class Exchange {
    private baseUrl;
    private apiKey?;
    private secret?;
    private useHmac;
    /**
     * Creates a new Exchange client instance
     * @param config - Configuration object containing domain, API credentials, and auth method
     */
    constructor(config: ExchangeConfig);
    /**
     * Generates HMAC signature for API authentication
     * @param apiKey - API key
     * @param url - Full URL of the request
     * @param body - Request body as string
     * @param nonce - Timestamp nonce
     * @returns HMAC signature
     */
    private generateHmacSignature;
    /**
     * Base64 encode function for browser compatibility
     * @param str - String to encode
     * @returns Base64 encoded string
     */
    private base64Encode;
    /**
     * Makes HTTP requests to the API with proper authentication
     * @param endpoint - API endpoint path
     * @param options - Fetch options
     * @returns Promise resolving to the API response
     */
    private request;
    /**
     * Creates a simple hash for HMAC signature (browser-compatible)
     * @param message - Message to hash
     * @param secret - Secret key
     * @returns Promise resolving to hex hash
     */
    private createSimpleHash;
    /**
     * Get all available currencies
     * @returns Promise resolving to currencies data
     */
    getCurrencies(): Promise<any>;
    /**
     * Get all available networks
     * @returns Promise resolving to networks data
     */
    getNetworks(): Promise<any>;
    /**
     * Get all available markets
     * @returns Promise resolving to markets data
     */
    getMarkets(): Promise<any>;
    /**
     * Get orderbook for a specific symbol
     * @param params - Parameters including symbol and optional limit
     * @returns Promise resolving to orderbook data
     */
    getOrderbook(params: {
        symbol: string;
        limit?: number;
    }): Promise<any>;
    /**
     * Get OHLCV (candlestick) data for a symbol
     * @param params - Parameters including symbol, interval, and optional pagination
     * @returns Promise resolving to OHLCV data
     */
    getOhlcv(params: {
        symbol: string;
        interval: number;
        page?: number;
        limit?: number;
        from?: number;
        to?: number;
    }): Promise<any>;
    /**
     * Get list of all market tickers
     * @returns Promise resolving to tickers list
     */
    getTickersList(): Promise<any>;
    /**
     * Get recent trades for a symbol
     * @param params - Parameters including symbol and optional pagination
     * @returns Promise resolving to trades data
     */
    getTrades(params: {
        symbol: string;
        page?: number;
        limit?: number;
    }): Promise<any>;
    /**
     * Get gains/losses transparency data
     * @param params - Optional parameters for filtering
     * @returns Promise resolving to transparency data
     */
    getGainsLossesTransparency(params?: {
        unclaimed_only?: boolean;
        period?: '1d' | '7d' | '30d';
    }): Promise<any>;
    /**
     * Get all available liquidity pools
     * @returns Promise resolving to pools data
     */
    getPools(): Promise<any>;
    /**
     * Get pool fees history
     * @param params - Optional parameters for filtering
     * @returns Promise resolving to fees history
     */
    getPoolFeesHistory(params?: {
        pool_id?: string;
        start_time?: number;
        end_time?: number;
        limit?: number;
        page?: number;
    }): Promise<any>;
    /**
     * Get current state of a specific pool
     * @param params - Parameters including pool symbol
     * @returns Promise resolving to pool state
     */
    getPoolState(params: {
        symbol: string;
    }): Promise<any>;
    /**
     * Get funds transparency data
     * @returns Promise resolving to funds transparency
     */
    getFundsTransparency(): Promise<any>;
    /**
     * Get EXK token configuration
     * @returns Promise resolving to EXK config
     */
    getExkConfig(): Promise<any>;
    /**
     * Get current forex prices
     * @returns Promise resolving to forex prices
     */
    getForexPrices(): Promise<any>;
    /**
     * Get EXK token reserves
     * @returns Promise resolving to EXK reserves
     */
    getExkReserves(): Promise<any>;
    /**
     * Redeem EXK tokens
     * @param params - Parameters including amount to redeem
     * @returns Promise resolving to redemption result
     */
    redeemExk(params: {
        amount: string;
    }): Promise<any>;
    /**
     * Get deposit address for a specific currency and network
     * @param params - Parameters including network and currency
     * @returns Promise resolving to deposit address
     */
    getDepositAddress(params: {
        network: string;
        currency: string;
    }): Promise<any>;
    /**
     * Get account balances
     * @returns Promise resolving to account balances
     */
    getBalances(): Promise<any>;
    /**
     * Get orders with optional filtering
     * @param params - Optional parameters for filtering orders
     * @returns Promise resolving to orders data
     */
    getOrders(params?: {
        symbol?: string;
        is_open?: boolean;
        has_filled?: boolean;
        side?: 'buy' | 'sell';
        page?: number;
        limit?: number;
    }): Promise<any>;
    /**
     * Create a new order
     * @param params - Order parameters including symbol, type, side, and amounts
     * @returns Promise resolving to created order
     */
    createOrder(params: {
        symbol: string;
        type: 'market' | 'limit';
        side: 'buy' | 'sell';
        quantity?: string;
        cost?: string;
        price?: string;
        client_order_id?: string;
    }): Promise<any>;
    /**
     * Cancel a specific order
     * @param params - Parameters including order ID and symbol
     * @returns Promise resolving to cancellation result
     */
    cancelOrder(params: {
        order_id: string;
        symbol: string;
    }): Promise<any>;
    /**
     * Cancel all orders for a specific symbol
     * @param params - Parameters including symbol
     * @returns Promise resolving to cancellation result
     */
    cancelAllOrders(params: {
        symbol: string;
    }): Promise<any>;
    /**
     * Get user's trade history
     * @param params - Optional parameters for filtering trades
     * @returns Promise resolving to user trades
     */
    getUserTrades(params?: {
        symbol?: string;
        side?: 'buy' | 'sell';
        taker_or_maker?: 'maker' | 'taker';
        page?: number;
        limit?: number;
    }): Promise<any>;
    /**
     * Prepare a withdrawal (first step of withdrawal process)
     * @param params - Withdrawal parameters including currency, amount, address, and network
     * @returns Promise resolving to withdrawal preparation result
     */
    prepareWithdrawal(params: {
        currency: string;
        amount: string;
        address: string;
        network: string;
        memo?: string;
    }): Promise<any>;
    /**
     * Finish a withdrawal (second step of withdrawal process)
     * @param params - Parameters including payload from prepare step
     * @returns Promise resolving to withdrawal completion result
     */
    finishWithdrawal(params: {
        payload: string;
    }): Promise<any>;
    /**
     * Get withdrawal details for a specific currency and network
     * @param params - Parameters including currency and network
     * @returns Promise resolving to withdrawal details
     */
    getWithdrawalDetail(params: {
        currency: string;
        network: string;
    }): Promise<any>;
    /**
     * Get deposit history
     * @param params - Optional parameters for filtering deposits
     * @returns Promise resolving to deposits data
     */
    getDeposits(params?: {
        currency?: string;
        network?: string;
        status?: 'completed' | 'pending' | 'failed';
        limit?: number;
        page?: number;
        start_time?: number;
        end_time?: number;
    }): Promise<any>;
    /**
     * Get a specific withdrawal by ID
     * @param params - Parameters including withdrawal ID
     * @returns Promise resolving to withdrawal data
     */
    getWithdrawal(params: {
        id: string;
    }): Promise<any>;
    /**
     * Get withdrawal history
     * @param params - Optional parameters for filtering withdrawals
     * @returns Promise resolving to withdrawals data
     */
    getWithdrawals(params?: {
        currency?: string;
        network?: string;
        limit?: number;
        status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
        page?: number;
        start_time?: number;
        end_time?: number;
    }): Promise<any>;
    /**
     * Join a liquidity pool
     * @param params - Parameters including pool ID, amounts, and optional price limits
     * @returns Promise resolving to pool join result
     */
    joinPool(params: {
        pool_id: string;
        max_base_amount: string;
        max_quote_amount: string;
        min_price?: string;
        max_price?: string;
    }): Promise<any>;
    /**
     * Leave a liquidity pool
     * @param params - Parameters including position ID
     * @returns Promise resolving to pool leave result
     */
    leavePool(params: {
        position_id: string;
    }): Promise<any>;
    /**
     * Get pool tasks (join/leave operations)
     * @param params - Optional parameters for filtering tasks
     * @returns Promise resolving to pool tasks
     */
    getPoolTasks(params?: {
        pool_id?: string;
        type?: 'join' | 'leave';
        status?: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
        page?: number;
        limit?: number;
        start_time?: number;
        end_time?: number;
    }): Promise<any>;
    /**
     * Get user's pool positions
     * @returns Promise resolving to pool positions
     */
    getPoolPositions(): Promise<any>;
    /**
     * Get a specific pool task by ID
     * @param params - Parameters including task ID
     * @returns Promise resolving to pool task data
     */
    getPoolTask(params: {
        task_id: string;
    }): Promise<any>;
}
export default Exchange;
