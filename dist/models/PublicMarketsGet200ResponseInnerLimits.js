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
exports.instanceOfPublicMarketsGet200ResponseInnerLimits = instanceOfPublicMarketsGet200ResponseInnerLimits;
exports.PublicMarketsGet200ResponseInnerLimitsFromJSON = PublicMarketsGet200ResponseInnerLimitsFromJSON;
exports.PublicMarketsGet200ResponseInnerLimitsFromJSONTyped = PublicMarketsGet200ResponseInnerLimitsFromJSONTyped;
exports.PublicMarketsGet200ResponseInnerLimitsToJSON = PublicMarketsGet200ResponseInnerLimitsToJSON;
exports.PublicMarketsGet200ResponseInnerLimitsToJSONTyped = PublicMarketsGet200ResponseInnerLimitsToJSONTyped;
const PublicMarketsGet200ResponseInnerLimitsPrice_1 = require("./PublicMarketsGet200ResponseInnerLimitsPrice");
/**
 * Check if a given object implements the PublicMarketsGet200ResponseInnerLimits interface.
 */
function instanceOfPublicMarketsGet200ResponseInnerLimits(value) {
    if (!('price' in value) || value['price'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('cost' in value) || value['cost'] === undefined)
        return false;
    return true;
}
function PublicMarketsGet200ResponseInnerLimitsFromJSON(json) {
    return PublicMarketsGet200ResponseInnerLimitsFromJSONTyped(json, false);
}
function PublicMarketsGet200ResponseInnerLimitsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'price': (0, PublicMarketsGet200ResponseInnerLimitsPrice_1.PublicMarketsGet200ResponseInnerLimitsPriceFromJSON)(json['price']),
        'amount': (0, PublicMarketsGet200ResponseInnerLimitsPrice_1.PublicMarketsGet200ResponseInnerLimitsPriceFromJSON)(json['amount']),
        'cost': (0, PublicMarketsGet200ResponseInnerLimitsPrice_1.PublicMarketsGet200ResponseInnerLimitsPriceFromJSON)(json['cost']),
    };
}
function PublicMarketsGet200ResponseInnerLimitsToJSON(json) {
    return PublicMarketsGet200ResponseInnerLimitsToJSONTyped(json, false);
}
function PublicMarketsGet200ResponseInnerLimitsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'price': (0, PublicMarketsGet200ResponseInnerLimitsPrice_1.PublicMarketsGet200ResponseInnerLimitsPriceToJSON)(value['price']),
        'amount': (0, PublicMarketsGet200ResponseInnerLimitsPrice_1.PublicMarketsGet200ResponseInnerLimitsPriceToJSON)(value['amount']),
        'cost': (0, PublicMarketsGet200ResponseInnerLimitsPrice_1.PublicMarketsGet200ResponseInnerLimitsPriceToJSON)(value['cost']),
    };
}
