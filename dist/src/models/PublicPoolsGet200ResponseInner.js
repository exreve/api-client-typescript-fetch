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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPublicPoolsGet200ResponseInner = instanceOfPublicPoolsGet200ResponseInner;
exports.PublicPoolsGet200ResponseInnerFromJSON = PublicPoolsGet200ResponseInnerFromJSON;
exports.PublicPoolsGet200ResponseInnerFromJSONTyped = PublicPoolsGet200ResponseInnerFromJSONTyped;
exports.PublicPoolsGet200ResponseInnerToJSON = PublicPoolsGet200ResponseInnerToJSON;
exports.PublicPoolsGet200ResponseInnerToJSONTyped = PublicPoolsGet200ResponseInnerToJSONTyped;
const PublicPoolsGet200ResponseInnerEarned24h_1 = require("./PublicPoolsGet200ResponseInnerEarned24h");
/**
 * Check if a given object implements the PublicPoolsGet200ResponseInner interface.
 */
function instanceOfPublicPoolsGet200ResponseInner(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('baseCurrency' in value) || value['baseCurrency'] === undefined)
        return false;
    if (!('quoteCurrency' in value) || value['quoteCurrency'] === undefined)
        return false;
    if (!('baseReserve' in value) || value['baseReserve'] === undefined)
        return false;
    if (!('quoteReserve' in value) || value['quoteReserve'] === undefined)
        return false;
    if (!('price' in value) || value['price'] === undefined)
        return false;
    if (!('earned24h' in value) || value['earned24h'] === undefined)
        return false;
    if (!('aPYEstimatedOnFees24h' in value) || value['aPYEstimatedOnFees24h'] === undefined)
        return false;
    return true;
}
function PublicPoolsGet200ResponseInnerFromJSON(json) {
    return PublicPoolsGet200ResponseInnerFromJSONTyped(json, false);
}
function PublicPoolsGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'baseCurrency': json['base_currency'],
        'quoteCurrency': json['quote_currency'],
        'baseReserve': json['base_reserve'],
        'quoteReserve': json['quote_reserve'],
        'price': json['price'],
        'earned24h': (0, PublicPoolsGet200ResponseInnerEarned24h_1.PublicPoolsGet200ResponseInnerEarned24hFromJSON)(json['earned_24h']),
        'aPYEstimatedOnFees24h': json['APY_estimated_on_fees_24h'],
        'active': json['active'] == null ? undefined : json['active'],
    };
}
function PublicPoolsGet200ResponseInnerToJSON(json) {
    return PublicPoolsGet200ResponseInnerToJSONTyped(json, false);
}
function PublicPoolsGet200ResponseInnerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'base_currency': value['baseCurrency'],
        'quote_currency': value['quoteCurrency'],
        'base_reserve': value['baseReserve'],
        'quote_reserve': value['quoteReserve'],
        'price': value['price'],
        'earned_24h': (0, PublicPoolsGet200ResponseInnerEarned24h_1.PublicPoolsGet200ResponseInnerEarned24hToJSON)(value['earned24h']),
        'APY_estimated_on_fees_24h': value['aPYEstimatedOnFees24h'],
        'active': value['active'],
    };
}
