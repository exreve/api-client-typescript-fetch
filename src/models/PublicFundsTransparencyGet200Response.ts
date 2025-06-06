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
import type { PublicFundsTransparencyGet200ResponseStatsValue } from './PublicFundsTransparencyGet200ResponseStatsValue';
import {
    PublicFundsTransparencyGet200ResponseStatsValueFromJSON,
    PublicFundsTransparencyGet200ResponseStatsValueFromJSONTyped,
    PublicFundsTransparencyGet200ResponseStatsValueToJSON,
    PublicFundsTransparencyGet200ResponseStatsValueToJSONTyped,
} from './PublicFundsTransparencyGet200ResponseStatsValue';
import type { PublicFundsTransparencyGet200ResponseFundsValueValue } from './PublicFundsTransparencyGet200ResponseFundsValueValue';
import {
    PublicFundsTransparencyGet200ResponseFundsValueValueFromJSON,
    PublicFundsTransparencyGet200ResponseFundsValueValueFromJSONTyped,
    PublicFundsTransparencyGet200ResponseFundsValueValueToJSON,
    PublicFundsTransparencyGet200ResponseFundsValueValueToJSONTyped,
} from './PublicFundsTransparencyGet200ResponseFundsValueValue';

/**
 * 
 * @export
 * @interface PublicFundsTransparencyGet200Response
 */
export interface PublicFundsTransparencyGet200Response {
    /**
     * 
     * @type {number}
     * @memberof PublicFundsTransparencyGet200Response
     */
    timestamp: number;
    /**
     * 
     * @type {{ [key: string]: { [key: string]: PublicFundsTransparencyGet200ResponseFundsValueValue | undefined; } | undefined; }}
     * @memberof PublicFundsTransparencyGet200Response
     */
    funds: { [key: string]: { [key: string]: PublicFundsTransparencyGet200ResponseFundsValueValue | undefined; } | undefined; };
    /**
     * 
     * @type {{ [key: string]: PublicFundsTransparencyGet200ResponseStatsValue | undefined; }}
     * @memberof PublicFundsTransparencyGet200Response
     */
    stats: { [key: string]: PublicFundsTransparencyGet200ResponseStatsValue | undefined; };
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof PublicFundsTransparencyGet200Response
     */
    addressesLabels: { [key: string]: string | undefined; };
}

/**
 * Check if a given object implements the PublicFundsTransparencyGet200Response interface.
 */
export function instanceOfPublicFundsTransparencyGet200Response(value: object): value is PublicFundsTransparencyGet200Response {
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('funds' in value) || value['funds'] === undefined) return false;
    if (!('stats' in value) || value['stats'] === undefined) return false;
    if (!('addressesLabels' in value) || value['addressesLabels'] === undefined) return false;
    return true;
}

export function PublicFundsTransparencyGet200ResponseFromJSON(json: any): PublicFundsTransparencyGet200Response {
    return PublicFundsTransparencyGet200ResponseFromJSONTyped(json, false);
}

export function PublicFundsTransparencyGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicFundsTransparencyGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'funds': json['funds'],
        'stats': (mapValues(json['stats'], PublicFundsTransparencyGet200ResponseStatsValueFromJSON)),
        'addressesLabels': json['addresses_labels'],
    };
}

export function PublicFundsTransparencyGet200ResponseToJSON(json: any): PublicFundsTransparencyGet200Response {
    return PublicFundsTransparencyGet200ResponseToJSONTyped(json, false);
}

export function PublicFundsTransparencyGet200ResponseToJSONTyped(value?: PublicFundsTransparencyGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'timestamp': value['timestamp'],
        'funds': value['funds'],
        'stats': (mapValues(value['stats'], PublicFundsTransparencyGet200ResponseStatsValueToJSON)),
        'addresses_labels': value['addressesLabels'],
    };
}

