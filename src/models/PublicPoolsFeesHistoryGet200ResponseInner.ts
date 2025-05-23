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
import type { PublicPoolsGet200ResponseInnerEarned24h } from './PublicPoolsGet200ResponseInnerEarned24h';
import {
    PublicPoolsGet200ResponseInnerEarned24hFromJSON,
    PublicPoolsGet200ResponseInnerEarned24hFromJSONTyped,
    PublicPoolsGet200ResponseInnerEarned24hToJSON,
    PublicPoolsGet200ResponseInnerEarned24hToJSONTyped,
} from './PublicPoolsGet200ResponseInnerEarned24h';

/**
 * 
 * @export
 * @interface PublicPoolsFeesHistoryGet200ResponseInner
 */
export interface PublicPoolsFeesHistoryGet200ResponseInner {
    /**
     * 
     * @type {number}
     * @memberof PublicPoolsFeesHistoryGet200ResponseInner
     */
    timestamp: number;
    /**
     * 
     * @type {PublicPoolsGet200ResponseInnerEarned24h}
     * @memberof PublicPoolsFeesHistoryGet200ResponseInner
     */
    fees: PublicPoolsGet200ResponseInnerEarned24h;
}

/**
 * Check if a given object implements the PublicPoolsFeesHistoryGet200ResponseInner interface.
 */
export function instanceOfPublicPoolsFeesHistoryGet200ResponseInner(value: object): value is PublicPoolsFeesHistoryGet200ResponseInner {
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('fees' in value) || value['fees'] === undefined) return false;
    return true;
}

export function PublicPoolsFeesHistoryGet200ResponseInnerFromJSON(json: any): PublicPoolsFeesHistoryGet200ResponseInner {
    return PublicPoolsFeesHistoryGet200ResponseInnerFromJSONTyped(json, false);
}

export function PublicPoolsFeesHistoryGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPoolsFeesHistoryGet200ResponseInner {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'fees': PublicPoolsGet200ResponseInnerEarned24hFromJSON(json['fees']),
    };
}

export function PublicPoolsFeesHistoryGet200ResponseInnerToJSON(json: any): PublicPoolsFeesHistoryGet200ResponseInner {
    return PublicPoolsFeesHistoryGet200ResponseInnerToJSONTyped(json, false);
}

export function PublicPoolsFeesHistoryGet200ResponseInnerToJSONTyped(value?: PublicPoolsFeesHistoryGet200ResponseInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'timestamp': value['timestamp'],
        'fees': PublicPoolsGet200ResponseInnerEarned24hToJSON(value['fees']),
    };
}

