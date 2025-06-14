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
exports.instanceOfPrivateOrdersCancelAllPostRequest = instanceOfPrivateOrdersCancelAllPostRequest;
exports.PrivateOrdersCancelAllPostRequestFromJSON = PrivateOrdersCancelAllPostRequestFromJSON;
exports.PrivateOrdersCancelAllPostRequestFromJSONTyped = PrivateOrdersCancelAllPostRequestFromJSONTyped;
exports.PrivateOrdersCancelAllPostRequestToJSON = PrivateOrdersCancelAllPostRequestToJSON;
exports.PrivateOrdersCancelAllPostRequestToJSONTyped = PrivateOrdersCancelAllPostRequestToJSONTyped;
/**
 * Check if a given object implements the PrivateOrdersCancelAllPostRequest interface.
 */
function instanceOfPrivateOrdersCancelAllPostRequest(value) {
    if (!('symbol' in value) || value['symbol'] === undefined)
        return false;
    return true;
}
function PrivateOrdersCancelAllPostRequestFromJSON(json) {
    return PrivateOrdersCancelAllPostRequestFromJSONTyped(json, false);
}
function PrivateOrdersCancelAllPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'symbol': json['symbol'],
    };
}
function PrivateOrdersCancelAllPostRequestToJSON(json) {
    return PrivateOrdersCancelAllPostRequestToJSONTyped(json, false);
}
function PrivateOrdersCancelAllPostRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'symbol': value['symbol'],
    };
}
