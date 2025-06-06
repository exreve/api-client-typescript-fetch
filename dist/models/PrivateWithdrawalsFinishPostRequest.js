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
exports.instanceOfPrivateWithdrawalsFinishPostRequest = instanceOfPrivateWithdrawalsFinishPostRequest;
exports.PrivateWithdrawalsFinishPostRequestFromJSON = PrivateWithdrawalsFinishPostRequestFromJSON;
exports.PrivateWithdrawalsFinishPostRequestFromJSONTyped = PrivateWithdrawalsFinishPostRequestFromJSONTyped;
exports.PrivateWithdrawalsFinishPostRequestToJSON = PrivateWithdrawalsFinishPostRequestToJSON;
exports.PrivateWithdrawalsFinishPostRequestToJSONTyped = PrivateWithdrawalsFinishPostRequestToJSONTyped;
/**
 * Check if a given object implements the PrivateWithdrawalsFinishPostRequest interface.
 */
function instanceOfPrivateWithdrawalsFinishPostRequest(value) {
    if (!('payload' in value) || value['payload'] === undefined)
        return false;
    return true;
}
function PrivateWithdrawalsFinishPostRequestFromJSON(json) {
    return PrivateWithdrawalsFinishPostRequestFromJSONTyped(json, false);
}
function PrivateWithdrawalsFinishPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'payload': json['payload'],
    };
}
function PrivateWithdrawalsFinishPostRequestToJSON(json) {
    return PrivateWithdrawalsFinishPostRequestToJSONTyped(json, false);
}
function PrivateWithdrawalsFinishPostRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'payload': value['payload'],
    };
}
