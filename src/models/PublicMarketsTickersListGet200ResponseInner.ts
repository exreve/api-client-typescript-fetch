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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PublicMarketsTickersListGet200ResponseInner
 */
export interface PublicMarketsTickersListGet200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof PublicMarketsTickersListGet200ResponseInner
     */
    symbol: string;
    /**
     * 
     * @type {string}
     * @memberof PublicMarketsTickersListGet200ResponseInner
     */
    lastPrice: string;
    /**
     * 
     * @type {string}
     * @memberof PublicMarketsTickersListGet200ResponseInner
     */
    priceChangePercent: string;
    /**
     * 
     * @type {string}
     * @memberof PublicMarketsTickersListGet200ResponseInner
     */
    baseVolume: string;
}

/**
 * Check if a given object implements the PublicMarketsTickersListGet200ResponseInner interface.
 */
export function instanceOfPublicMarketsTickersListGet200ResponseInner(value: object): value is PublicMarketsTickersListGet200ResponseInner {
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('lastPrice' in value) || value['lastPrice'] === undefined) return false;
    if (!('priceChangePercent' in value) || value['priceChangePercent'] === undefined) return false;
    if (!('baseVolume' in value) || value['baseVolume'] === undefined) return false;
    return true;
}

export function PublicMarketsTickersListGet200ResponseInnerFromJSON(json: any): PublicMarketsTickersListGet200ResponseInner {
    return PublicMarketsTickersListGet200ResponseInnerFromJSONTyped(json, false);
}

export function PublicMarketsTickersListGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMarketsTickersListGet200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'symbol': json['symbol'],
        'lastPrice': json['last_price'],
        'priceChangePercent': json['price_change_percent'],
        'baseVolume': json['base_volume'],
    };
}

export function PublicMarketsTickersListGet200ResponseInnerToJSON(json: any): PublicMarketsTickersListGet200ResponseInner {
    return PublicMarketsTickersListGet200ResponseInnerToJSONTyped(json, false);
}

export function PublicMarketsTickersListGet200ResponseInnerToJSONTyped(value?: PublicMarketsTickersListGet200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'symbol': value['symbol'],
        'last_price': value['lastPrice'],
        'price_change_percent': value['priceChangePercent'],
        'base_volume': value['baseVolume'],
    };
}

