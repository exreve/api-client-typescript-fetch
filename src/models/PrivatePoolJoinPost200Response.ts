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
 * @interface PrivatePoolJoinPost200Response
 */
export interface PrivatePoolJoinPost200Response {
    /**
     * 
     * @type {boolean}
     * @memberof PrivatePoolJoinPost200Response
     */
    success: boolean;
}

/**
 * Check if a given object implements the PrivatePoolJoinPost200Response interface.
 */
export function instanceOfPrivatePoolJoinPost200Response(value: object): value is PrivatePoolJoinPost200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    return true;
}

export function PrivatePoolJoinPost200ResponseFromJSON(json: any): PrivatePoolJoinPost200Response {
    return PrivatePoolJoinPost200ResponseFromJSONTyped(json, false);
}

export function PrivatePoolJoinPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivatePoolJoinPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
    };
}

export function PrivatePoolJoinPost200ResponseToJSON(json: any): PrivatePoolJoinPost200Response {
    return PrivatePoolJoinPost200ResponseToJSONTyped(json, false);
}

export function PrivatePoolJoinPost200ResponseToJSONTyped(value?: PrivatePoolJoinPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
    };
}

