"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * ExKoin API Documentation
 * API documentation for ExKoin Crypto exchange
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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
exports.PrivatePoolTasksGetStatusEnum = exports.PrivatePoolTasksGetTypeEnum = exports.PoolApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
/**
 *
 */
class PoolApi extends runtime.BaseAPI {
    /**
     * Join a pool, it will deduct the currencies from your balance, and you will be credited the corresponding lp token
     */
    privatePoolJoinPostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['privatePoolJoinPostRequest'] == null) {
                throw new runtime.RequiredError('privatePoolJoinPostRequest', 'Required parameter "privatePoolJoinPostRequest" was null or undefined when calling privatePoolJoinPost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-KEY"] = yield this.configuration.apiKey("X-API-KEY"); // apiKey authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-SIGN"] = yield this.configuration.apiKey("X-API-SIGN"); // signature authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["sessiontoken"] = yield this.configuration.apiKey("sessiontoken"); // sessionToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-NONCE"] = yield this.configuration.apiKey("X-API-NONCE"); // nonce authentication
            }
            const response = yield this.request({
                path: `/private/pool/join`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.PrivatePoolJoinPostRequestToJSON)(requestParameters['privatePoolJoinPostRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PrivatePoolJoinPost200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Join a pool, it will deduct the currencies from your balance, and you will be credited the corresponding lp token
     */
    privatePoolJoinPost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.privatePoolJoinPostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Leave a pool, it consumes the lp token and credits your balance with the corresponding currencies
     */
    privatePoolLeavePostRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['privatePoolLeavePostRequest'] == null) {
                throw new runtime.RequiredError('privatePoolLeavePostRequest', 'Required parameter "privatePoolLeavePostRequest" was null or undefined when calling privatePoolLeavePost().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-KEY"] = yield this.configuration.apiKey("X-API-KEY"); // apiKey authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-SIGN"] = yield this.configuration.apiKey("X-API-SIGN"); // signature authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["sessiontoken"] = yield this.configuration.apiKey("sessiontoken"); // sessionToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-NONCE"] = yield this.configuration.apiKey("X-API-NONCE"); // nonce authentication
            }
            const response = yield this.request({
                path: `/private/pool/leave`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.PrivatePoolLeavePostRequestToJSON)(requestParameters['privatePoolLeavePostRequest']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PrivatePoolJoinPost200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Leave a pool, it consumes the lp token and credits your balance with the corresponding currencies
     */
    privatePoolLeavePost(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.privatePoolLeavePostRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the user pool positions
     */
    privatePoolPositionsGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-KEY"] = yield this.configuration.apiKey("X-API-KEY"); // apiKey authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-SIGN"] = yield this.configuration.apiKey("X-API-SIGN"); // signature authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["sessiontoken"] = yield this.configuration.apiKey("sessiontoken"); // sessionToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-NONCE"] = yield this.configuration.apiKey("X-API-NONCE"); // nonce authentication
            }
            const response = yield this.request({
                path: `/private/pool/positions`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.PrivatePoolPositionsGet200ResponseInnerFromJSON));
        });
    }
    /**
     * Get the user pool positions
     */
    privatePoolPositionsGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.privatePoolPositionsGetRaw(initOverrides);
            return yield response.value();
        });
    }
    /**
     * get a pool task (join/leave) by id
     */
    privatePoolTaskGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['taskId'] == null) {
                throw new runtime.RequiredError('taskId', 'Required parameter "taskId" was null or undefined when calling privatePoolTaskGet().');
            }
            const queryParameters = {};
            if (requestParameters['taskId'] != null) {
                queryParameters['task_id'] = requestParameters['taskId'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-KEY"] = yield this.configuration.apiKey("X-API-KEY"); // apiKey authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-SIGN"] = yield this.configuration.apiKey("X-API-SIGN"); // signature authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["sessiontoken"] = yield this.configuration.apiKey("sessiontoken"); // sessionToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-NONCE"] = yield this.configuration.apiKey("X-API-NONCE"); // nonce authentication
            }
            const response = yield this.request({
                path: `/private/pool/task`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PrivatePoolTasksGet200ResponseInnerFromJSON)(jsonValue));
        });
    }
    /**
     * get a pool task (join/leave) by id
     */
    privatePoolTaskGet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.privatePoolTaskGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the user pool tasks (join/leave)
     */
    privatePoolTasksGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['poolId'] != null) {
                queryParameters['pool_id'] = requestParameters['poolId'];
            }
            if (requestParameters['type'] != null) {
                queryParameters['type'] = requestParameters['type'];
            }
            if (requestParameters['status'] != null) {
                queryParameters['status'] = requestParameters['status'];
            }
            if (requestParameters['page'] != null) {
                queryParameters['page'] = requestParameters['page'];
            }
            if (requestParameters['limit'] != null) {
                queryParameters['limit'] = requestParameters['limit'];
            }
            if (requestParameters['startTime'] != null) {
                queryParameters['start_time'] = requestParameters['startTime'];
            }
            if (requestParameters['endTime'] != null) {
                queryParameters['end_time'] = requestParameters['endTime'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-KEY"] = yield this.configuration.apiKey("X-API-KEY"); // apiKey authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-SIGN"] = yield this.configuration.apiKey("X-API-SIGN"); // signature authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["sessiontoken"] = yield this.configuration.apiKey("sessiontoken"); // sessionToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-NONCE"] = yield this.configuration.apiKey("X-API-NONCE"); // nonce authentication
            }
            const response = yield this.request({
                path: `/private/pool/tasks`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.PrivatePoolTasksGet200ResponseInnerFromJSON));
        });
    }
    /**
     * Get the user pool tasks (join/leave)
     */
    privatePoolTasksGet() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.privatePoolTasksGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get the public pool state (price, balance, positions)
     */
    publicPoolStateGetRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['symbol'] == null) {
                throw new runtime.RequiredError('symbol', 'Required parameter "symbol" was null or undefined when calling publicPoolStateGet().');
            }
            const queryParameters = {};
            if (requestParameters['symbol'] != null) {
                queryParameters['symbol'] = requestParameters['symbol'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-KEY"] = yield this.configuration.apiKey("X-API-KEY"); // apiKey authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-SIGN"] = yield this.configuration.apiKey("X-API-SIGN"); // signature authentication
            }
            if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["sessiontoken"] = yield this.configuration.apiKey("sessiontoken"); // sessionToken authentication
            }
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["X-API-NONCE"] = yield this.configuration.apiKey("X-API-NONCE"); // nonce authentication
            }
            const response = yield this.request({
                path: `/public/pool/state`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PublicPoolStateGet200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get the public pool state (price, balance, positions)
     */
    publicPoolStateGet(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.publicPoolStateGetRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all active pools
     */
    publicPoolsGetRaw(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/public/pools`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(index_1.PublicPoolsGet200ResponseInnerFromJSON));
        });
    }
    /**
     * Get all active pools
     */
    publicPoolsGet(initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.publicPoolsGetRaw(initOverrides);
            return yield response.value();
        });
    }
}
exports.PoolApi = PoolApi;
/**
 * @export
 */
exports.PrivatePoolTasksGetTypeEnum = {
    Join: 'join',
    Leave: 'leave'
};
/**
 * @export
 */
exports.PrivatePoolTasksGetStatusEnum = {
    Pending: 'pending',
    Processing: 'processing',
    Completed: 'completed',
    Failed: 'failed',
    Cancelled: 'cancelled'
};
