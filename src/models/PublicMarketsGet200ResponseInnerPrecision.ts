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
 * @interface PublicMarketsGet200ResponseInnerPrecision
 */
export interface PublicMarketsGet200ResponseInnerPrecision {
    /**
     * 
     * @type {number}
     * @memberof PublicMarketsGet200ResponseInnerPrecision
     */
    amount: number;
    /**
     * 
     * @type {number}
     * @memberof PublicMarketsGet200ResponseInnerPrecision
     */
    cost: number;
    /**
     * 
     * @type {number}
     * @memberof PublicMarketsGet200ResponseInnerPrecision
     */
    price: number;
}

/**
 * Check if a given object implements the PublicMarketsGet200ResponseInnerPrecision interface.
 */
export function instanceOfPublicMarketsGet200ResponseInnerPrecision(value: object): value is PublicMarketsGet200ResponseInnerPrecision {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    return true;
}

export function PublicMarketsGet200ResponseInnerPrecisionFromJSON(json: any): PublicMarketsGet200ResponseInnerPrecision {
    return PublicMarketsGet200ResponseInnerPrecisionFromJSONTyped(json, false);
}

export function PublicMarketsGet200ResponseInnerPrecisionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMarketsGet200ResponseInnerPrecision {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'cost': json['cost'],
        'price': json['price'],
    };
}

export function PublicMarketsGet200ResponseInnerPrecisionToJSON(json: any): PublicMarketsGet200ResponseInnerPrecision {
    return PublicMarketsGet200ResponseInnerPrecisionToJSONTyped(json, false);
}

export function PublicMarketsGet200ResponseInnerPrecisionToJSONTyped(value?: PublicMarketsGet200ResponseInnerPrecision | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'cost': value['cost'],
        'price': value['price'],
    };
}

