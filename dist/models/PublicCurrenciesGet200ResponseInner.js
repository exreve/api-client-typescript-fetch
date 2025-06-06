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
exports.instanceOfPublicCurrenciesGet200ResponseInner = instanceOfPublicCurrenciesGet200ResponseInner;
exports.PublicCurrenciesGet200ResponseInnerFromJSON = PublicCurrenciesGet200ResponseInnerFromJSON;
exports.PublicCurrenciesGet200ResponseInnerFromJSONTyped = PublicCurrenciesGet200ResponseInnerFromJSONTyped;
exports.PublicCurrenciesGet200ResponseInnerToJSON = PublicCurrenciesGet200ResponseInnerToJSON;
exports.PublicCurrenciesGet200ResponseInnerToJSONTyped = PublicCurrenciesGet200ResponseInnerToJSONTyped;
const PublicCurrenciesGet200ResponseInnerNetworksInner_1 = require("./PublicCurrenciesGet200ResponseInnerNetworksInner");
/**
 * Check if a given object implements the PublicCurrenciesGet200ResponseInner interface.
 */
function instanceOfPublicCurrenciesGet200ResponseInner(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('precision' in value) || value['precision'] === undefined)
        return false;
    if (!('valueUsd' in value) || value['valueUsd'] === undefined)
        return false;
    if (!('logoUrl' in value) || value['logoUrl'] === undefined)
        return false;
    if (!('networks' in value) || value['networks'] === undefined)
        return false;
    return true;
}
function PublicCurrenciesGet200ResponseInnerFromJSON(json) {
    return PublicCurrenciesGet200ResponseInnerFromJSONTyped(json, false);
}
function PublicCurrenciesGet200ResponseInnerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'precision': json['precision'],
        'valueUsd': json['value_usd'],
        'logoUrl': json['logo_url'],
        'networks': (json['networks'].map(PublicCurrenciesGet200ResponseInnerNetworksInner_1.PublicCurrenciesGet200ResponseInnerNetworksInnerFromJSON)),
        'depositEnabled': json['deposit_enabled'] == null ? undefined : json['deposit_enabled'],
        'withdrawalEnabled': json['withdrawal_enabled'] == null ? undefined : json['withdrawal_enabled'],
        'lpTokenOf': json['lp_token_of'] == null ? undefined : json['lp_token_of'],
    };
}
function PublicCurrenciesGet200ResponseInnerToJSON(json) {
    return PublicCurrenciesGet200ResponseInnerToJSONTyped(json, false);
}
function PublicCurrenciesGet200ResponseInnerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'precision': value['precision'],
        'value_usd': value['valueUsd'],
        'logo_url': value['logoUrl'],
        'networks': (value['networks'].map(PublicCurrenciesGet200ResponseInnerNetworksInner_1.PublicCurrenciesGet200ResponseInnerNetworksInnerToJSON)),
        'deposit_enabled': value['depositEnabled'],
        'withdrawal_enabled': value['withdrawalEnabled'],
        'lp_token_of': value['lpTokenOf'],
    };
}
