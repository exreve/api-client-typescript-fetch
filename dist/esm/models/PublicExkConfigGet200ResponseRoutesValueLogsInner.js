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
/**
 * Check if a given object implements the PublicExkConfigGet200ResponseRoutesValueLogsInner interface.
 */
export function instanceOfPublicExkConfigGet200ResponseRoutesValueLogsInner(value) {
    if (!('t' in value) || value['t'] === undefined)
        return false;
    if (!('v' in value) || value['v'] === undefined)
        return false;
    return true;
}
export function PublicExkConfigGet200ResponseRoutesValueLogsInnerFromJSON(json) {
    return PublicExkConfigGet200ResponseRoutesValueLogsInnerFromJSONTyped(json, false);
}
export function PublicExkConfigGet200ResponseRoutesValueLogsInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        't': json['t'],
        'v': json['v'],
    };
}
export function PublicExkConfigGet200ResponseRoutesValueLogsInnerToJSON(json) {
    return PublicExkConfigGet200ResponseRoutesValueLogsInnerToJSONTyped(json, false);
}
export function PublicExkConfigGet200ResponseRoutesValueLogsInnerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        't': value['t'],
        'v': value['v'],
    };
}
