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
 * Check if a given object implements the PublicCurrenciesGetDefaultResponse interface.
 */
export function instanceOfPublicCurrenciesGetDefaultResponse(value) {
    if (!('success' in value) || value['success'] === undefined)
        return false;
    if (!('code' in value) || value['code'] === undefined)
        return false;
    if (!('error' in value) || value['error'] === undefined)
        return false;
    return true;
}
export function PublicCurrenciesGetDefaultResponseFromJSON(json) {
    return PublicCurrenciesGetDefaultResponseFromJSONTyped(json, false);
}
export function PublicCurrenciesGetDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'success': json['success'],
        'code': json['code'],
        'error': json['error'],
        'details': json['details'] == null ? undefined : json['details'],
        'params': json['params'] == null ? undefined : json['params'],
    };
}
export function PublicCurrenciesGetDefaultResponseToJSON(json) {
    return PublicCurrenciesGetDefaultResponseToJSONTyped(json, false);
}
export function PublicCurrenciesGetDefaultResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'success': value['success'],
        'code': value['code'],
        'error': value['error'],
        'details': value['details'],
        'params': value['params'],
    };
}
