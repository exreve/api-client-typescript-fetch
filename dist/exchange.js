"use strict";
/**
 * ExKoin API Exchange Client
 * A TypeScript client for interacting with the ExKoin Exchange API
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ExKoin Exchange API Client
 * Provides methods to interact with both public and private endpoints
 */
class Exchange {
    /**
     * Creates a new Exchange client instance
     * @param config - Configuration object containing domain, API credentials, and auth method
     */
    constructor(config) {
        this.baseUrl = `https://api.${config.domainName}/v1`;
        this.apiKey = config.apiKey;
        this.secret = config.secret;
        this.useHmac = config.useHmac || false;
    }
    /**
     * Generates HMAC signature for API authentication
     * @param apiKey - API key
     * @param url - Full URL of the request
     * @param body - Request body as string
     * @param nonce - Timestamp nonce
     * @returns HMAC signature
     */
    generateHmacSignature(apiKey, url, body, nonce) {
        if (!this.secret) {
            throw new Error('Secret is required for HMAC authentication');
        }
        // Use built-in crypto for browser compatibility
        const payload = apiKey + url + body + nonce;
        const encoder = new TextEncoder();
        const keyData = encoder.encode(this.secret);
        const messageData = encoder.encode(payload);
        return crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']).then(key => crypto.subtle.sign('HMAC', key, messageData)).then(signature => Array.from(new Uint8Array(signature))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('')); // This needs to be handled properly in async context
    }
    /**
     * Base64 encode function for browser compatibility
     * @param str - String to encode
     * @returns Base64 encoded string
     */
    base64Encode(str) {
        if (typeof btoa !== 'undefined') {
            return btoa(str);
        }
        // Fallback for Node.js environments
        //@ts-ignore
        return Buffer.from(str).toString('base64');
    }
    /**
     * Makes HTTP requests to the API with proper authentication
     * @param endpoint - API endpoint path
     * @param options - Fetch options
     * @returns Promise resolving to the API response
     */
    request(endpoint_1) {
        return __awaiter(this, arguments, void 0, function* (endpoint, options = {}) {
            const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers);
            const fullUrl = `${this.baseUrl}${endpoint}`;
            if (this.apiKey) {
                if (this.useHmac && this.secret) {
                    // HMAC Authentication
                    const nonce = Date.now().toString();
                    const body = options.body || '';
                    // For HMAC, we need to handle this synchronously or use a different approach
                    // Using a simpler hash for browser compatibility
                    const payload = this.apiKey + fullUrl + body + nonce;
                    const signature = yield this.createSimpleHash(payload, this.secret);
                    headers['X-API-KEY'] = this.apiKey;
                    headers['X-API-NONCE'] = nonce;
                    headers['X-API-SIGN'] = signature;
                }
                else if (this.secret) {
                    // Basic Auth with API Key + Secret
                    const credentials = this.base64Encode(`${this.apiKey}:${this.secret}`);
                    headers['Authorization'] = `Basic ${credentials}`;
                }
                else {
                    // API Key only
                    headers['Authorization'] = `Bearer ${this.apiKey}`;
                }
            }
            const response = yield fetch(fullUrl, Object.assign(Object.assign({}, options), { headers }));
            if (!response.ok) {
                const errorText = yield response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }
            return response.json();
        });
    }
    /**
     * Creates a simple hash for HMAC signature (browser-compatible)
     * @param message - Message to hash
     * @param secret - Secret key
     * @returns Promise resolving to hex hash
     */
    createSimpleHash(message, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoder = new TextEncoder();
            const keyData = encoder.encode(secret);
            const messageData = encoder.encode(message);
            const key = yield crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
            const signature = yield crypto.subtle.sign('HMAC', key, messageData);
            return Array.from(new Uint8Array(signature))
                .map(b => b.toString(16).padStart(2, '0'))
                .join('');
        });
    }
    // Public endpoints
    /**
     * Get all available currencies
     * @returns Promise resolving to currencies data
     */
    getCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/currencies');
        });
    }
    /**
     * Get all available networks
     * @returns Promise resolving to networks data
     */
    getNetworks() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/networks');
        });
    }
    /**
     * Get all available markets
     * @returns Promise resolving to markets data
     */
    getMarkets() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/markets');
        });
    }
    /**
     * Get orderbook for a specific symbol
     * @param params - Parameters including symbol and optional limit
     * @returns Promise resolving to orderbook data
     */
    getOrderbook(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('symbol', params.symbol);
            if (params.limit)
                queryParams.append('limit', params.limit.toString());
            return this.request(`/public/orderbook?${queryParams}`);
        });
    }
    /**
     * Get OHLCV (candlestick) data for a symbol
     * @param params - Parameters including symbol, interval, and optional pagination
     * @returns Promise resolving to OHLCV data
     */
    getOhlcv(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('symbol', params.symbol);
            queryParams.append('interval', params.interval.toString());
            if (params.page)
                queryParams.append('page', params.page.toString());
            if (params.limit)
                queryParams.append('limit', params.limit.toString());
            if (params.from)
                queryParams.append('from', params.from.toString());
            if (params.to)
                queryParams.append('to', params.to.toString());
            return this.request(`/public/ohlcv?${queryParams}`);
        });
    }
    /**
     * Get list of all market tickers
     * @returns Promise resolving to tickers list
     */
    getTickersList() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/markets/tickers-list');
        });
    }
    /**
     * Get recent trades for a symbol
     * @param params - Parameters including symbol and optional pagination
     * @returns Promise resolving to trades data
     */
    getTrades(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('symbol', params.symbol);
            if (params.page)
                queryParams.append('page', params.page.toString());
            if (params.limit)
                queryParams.append('limit', params.limit.toString());
            return this.request(`/public/trades?${queryParams}`);
        });
    }
    /**
     * Get gains/losses transparency data
     * @param params - Optional parameters for filtering
     * @returns Promise resolving to transparency data
     */
    getGainsLossesTransparency(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.unclaimed_only)
                queryParams.append('unclaimed_only', params.unclaimed_only.toString());
            if (params === null || params === void 0 ? void 0 : params.period)
                queryParams.append('period', params.period);
            return this.request(`/public/gains-losses-transparency${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Get all available liquidity pools
     * @returns Promise resolving to pools data
     */
    getPools() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/pools');
        });
    }
    /**
     * Get pool fees history
     * @param params - Optional parameters for filtering
     * @returns Promise resolving to fees history
     */
    getPoolFeesHistory(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.pool_id)
                queryParams.append('pool_id', params.pool_id);
            if (params === null || params === void 0 ? void 0 : params.start_time)
                queryParams.append('start_time', params.start_time.toString());
            if (params === null || params === void 0 ? void 0 : params.end_time)
                queryParams.append('end_time', params.end_time.toString());
            if (params === null || params === void 0 ? void 0 : params.limit)
                queryParams.append('limit', params.limit.toString());
            if (params === null || params === void 0 ? void 0 : params.page)
                queryParams.append('page', params.page.toString());
            return this.request(`/public/pools/fees-history${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Get current state of a specific pool
     * @param params - Parameters including pool symbol
     * @returns Promise resolving to pool state
     */
    getPoolState(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('symbol', params.symbol);
            return this.request(`/public/pool/state?${queryParams}`);
        });
    }
    /**
     * Get funds transparency data
     * @returns Promise resolving to funds transparency
     */
    getFundsTransparency() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/funds-transparency');
        });
    }
    /**
     * Get EXK token configuration
     * @returns Promise resolving to EXK config
     */
    getExkConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/exk/config');
        });
    }
    /**
     * Get current forex prices
     * @returns Promise resolving to forex prices
     */
    getForexPrices() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/forex-prices');
        });
    }
    /**
     * Get EXK token reserves
     * @returns Promise resolving to EXK reserves
     */
    getExkReserves() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/exk/reserves');
        });
    }
    /**
     * Redeem EXK tokens
     * @param params - Parameters including amount to redeem
     * @returns Promise resolving to redemption result
     */
    redeemExk(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/public/exk/redeem', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    // Private endpoints
    /**
     * Get deposit address for a specific currency and network
     * @param params - Parameters including network and currency
     * @returns Promise resolving to deposit address
     */
    getDepositAddress(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('network', params.network);
            queryParams.append('currency', params.currency);
            return this.request(`/private/deposit-address?${queryParams}`);
        });
    }
    /**
     * Get account balances
     * @returns Promise resolving to account balances
     */
    getBalances() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/balances');
        });
    }
    /**
     * Get orders with optional filtering
     * @param params - Optional parameters for filtering orders
     * @returns Promise resolving to orders data
     */
    getOrders(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.symbol)
                queryParams.append('symbol', params.symbol);
            if ((params === null || params === void 0 ? void 0 : params.is_open) !== undefined)
                queryParams.append('is_open', params.is_open.toString());
            if ((params === null || params === void 0 ? void 0 : params.has_filled) !== undefined)
                queryParams.append('has_filled', params.has_filled.toString());
            if (params === null || params === void 0 ? void 0 : params.side)
                queryParams.append('side', params.side);
            if (params === null || params === void 0 ? void 0 : params.page)
                queryParams.append('page', params.page.toString());
            if (params === null || params === void 0 ? void 0 : params.limit)
                queryParams.append('limit', params.limit.toString());
            return this.request(`/private/orders${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Create a new order
     * @param params - Order parameters including symbol, type, side, and amounts
     * @returns Promise resolving to created order
     */
    createOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/orders', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Cancel a specific order
     * @param params - Parameters including order ID and symbol
     * @returns Promise resolving to cancellation result
     */
    cancelOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/orders/cancel', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Cancel all orders for a specific symbol
     * @param params - Parameters including symbol
     * @returns Promise resolving to cancellation result
     */
    cancelAllOrders(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/orders/cancel-all', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Get user's trade history
     * @param params - Optional parameters for filtering trades
     * @returns Promise resolving to user trades
     */
    getUserTrades(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.symbol)
                queryParams.append('symbol', params.symbol);
            if (params === null || params === void 0 ? void 0 : params.side)
                queryParams.append('side', params.side);
            if (params === null || params === void 0 ? void 0 : params.taker_or_maker)
                queryParams.append('taker_or_maker', params.taker_or_maker);
            if (params === null || params === void 0 ? void 0 : params.page)
                queryParams.append('page', params.page.toString());
            if (params === null || params === void 0 ? void 0 : params.limit)
                queryParams.append('limit', params.limit.toString());
            return this.request(`/private/trades${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Prepare a withdrawal (first step of withdrawal process)
     * @param params - Withdrawal parameters including currency, amount, address, and network
     * @returns Promise resolving to withdrawal preparation result
     */
    prepareWithdrawal(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/withdrawals/prepare', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Finish a withdrawal (second step of withdrawal process)
     * @param params - Parameters including payload from prepare step
     * @returns Promise resolving to withdrawal completion result
     */
    finishWithdrawal(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/withdrawals/finish', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Get withdrawal details for a specific currency and network
     * @param params - Parameters including currency and network
     * @returns Promise resolving to withdrawal details
     */
    getWithdrawalDetail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('currency', params.currency);
            queryParams.append('network', params.network);
            return this.request(`/private/withdrawals/detail?${queryParams}`);
        });
    }
    /**
     * Get deposit history
     * @param params - Optional parameters for filtering deposits
     * @returns Promise resolving to deposits data
     */
    getDeposits(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.currency)
                queryParams.append('currency', params.currency);
            if (params === null || params === void 0 ? void 0 : params.network)
                queryParams.append('network', params.network);
            if (params === null || params === void 0 ? void 0 : params.status)
                queryParams.append('status', params.status);
            if (params === null || params === void 0 ? void 0 : params.limit)
                queryParams.append('limit', params.limit.toString());
            if (params === null || params === void 0 ? void 0 : params.page)
                queryParams.append('page', params.page.toString());
            if (params === null || params === void 0 ? void 0 : params.start_time)
                queryParams.append('start_time', params.start_time.toString());
            if (params === null || params === void 0 ? void 0 : params.end_time)
                queryParams.append('end_time', params.end_time.toString());
            return this.request(`/private/deposits${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Get a specific withdrawal by ID
     * @param params - Parameters including withdrawal ID
     * @returns Promise resolving to withdrawal data
     */
    getWithdrawal(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('id', params.id);
            return this.request(`/private/withdrawal?${queryParams}`);
        });
    }
    /**
     * Get withdrawal history
     * @param params - Optional parameters for filtering withdrawals
     * @returns Promise resolving to withdrawals data
     */
    getWithdrawals(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.currency)
                queryParams.append('currency', params.currency);
            if (params === null || params === void 0 ? void 0 : params.network)
                queryParams.append('network', params.network);
            if (params === null || params === void 0 ? void 0 : params.limit)
                queryParams.append('limit', params.limit.toString());
            if (params === null || params === void 0 ? void 0 : params.status)
                queryParams.append('status', params.status);
            if (params === null || params === void 0 ? void 0 : params.page)
                queryParams.append('page', params.page.toString());
            if (params === null || params === void 0 ? void 0 : params.start_time)
                queryParams.append('start_time', params.start_time.toString());
            if (params === null || params === void 0 ? void 0 : params.end_time)
                queryParams.append('end_time', params.end_time.toString());
            return this.request(`/private/withdrawals${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Join a liquidity pool
     * @param params - Parameters including pool ID, amounts, and optional price limits
     * @returns Promise resolving to pool join result
     */
    joinPool(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/pool/join', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Leave a liquidity pool
     * @param params - Parameters including position ID
     * @returns Promise resolving to pool leave result
     */
    leavePool(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/pool/leave', {
                method: 'POST',
                body: JSON.stringify(params),
            });
        });
    }
    /**
     * Get pool tasks (join/leave operations)
     * @param params - Optional parameters for filtering tasks
     * @returns Promise resolving to pool tasks
     */
    getPoolTasks(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            if (params === null || params === void 0 ? void 0 : params.pool_id)
                queryParams.append('pool_id', params.pool_id);
            if (params === null || params === void 0 ? void 0 : params.type)
                queryParams.append('type', params.type);
            if (params === null || params === void 0 ? void 0 : params.status)
                queryParams.append('status', params.status);
            if (params === null || params === void 0 ? void 0 : params.page)
                queryParams.append('page', params.page.toString());
            if (params === null || params === void 0 ? void 0 : params.limit)
                queryParams.append('limit', params.limit.toString());
            if (params === null || params === void 0 ? void 0 : params.start_time)
                queryParams.append('start_time', params.start_time.toString());
            if (params === null || params === void 0 ? void 0 : params.end_time)
                queryParams.append('end_time', params.end_time.toString());
            return this.request(`/private/pool/tasks${queryParams.toString() ? '?' + queryParams : ''}`);
        });
    }
    /**
     * Get user's pool positions
     * @returns Promise resolving to pool positions
     */
    getPoolPositions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('/private/pool/positions');
        });
    }
    /**
     * Get a specific pool task by ID
     * @param params - Parameters including task ID
     * @returns Promise resolving to pool task data
     */
    getPoolTask(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParams = new URLSearchParams();
            queryParams.append('task_id', params.task_id);
            return this.request(`/private/pool/task?${queryParams}`);
        });
    }
}
exports.default = Exchange;
