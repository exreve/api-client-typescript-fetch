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
exports.instanceOfPublicExkConfigGet200Response = instanceOfPublicExkConfigGet200Response;
exports.PublicExkConfigGet200ResponseFromJSON = PublicExkConfigGet200ResponseFromJSON;
exports.PublicExkConfigGet200ResponseFromJSONTyped = PublicExkConfigGet200ResponseFromJSONTyped;
exports.PublicExkConfigGet200ResponseToJSON = PublicExkConfigGet200ResponseToJSON;
exports.PublicExkConfigGet200ResponseToJSONTyped = PublicExkConfigGet200ResponseToJSONTyped;
const runtime_1 = require("../runtime");
const PublicExkConfigGet200ResponseUserLevelsInner_1 = require("./PublicExkConfigGet200ResponseUserLevelsInner");
const PublicExkConfigGet200ResponseWeeklyDist_1 = require("./PublicExkConfigGet200ResponseWeeklyDist");
const PublicExkConfigGet200ResponseRoutesValue_1 = require("./PublicExkConfigGet200ResponseRoutesValue");
/**
 * Check if a given object implements the PublicExkConfigGet200Response interface.
 */
function instanceOfPublicExkConfigGet200Response(value) {
    if (!('circulatingSupply' in value) || value['circulatingSupply'] === undefined)
        return false;
    if (!('lastReserveValueUsd' in value) || value['lastReserveValueUsd'] === undefined)
        return false;
    if (!('mintRate' in value) || value['mintRate'] === undefined)
        return false;
    if (!('lpSharePercentToExk' in value) || value['lpSharePercentToExk'] === undefined)
        return false;
    if (!('routes' in value) || value['routes'] === undefined)
        return false;
    if (!('userLevels' in value) || value['userLevels'] === undefined)
        return false;
    if (!('weeklyDist' in value) || value['weeklyDist'] === undefined)
        return false;
    return true;
}
function PublicExkConfigGet200ResponseFromJSON(json) {
    return PublicExkConfigGet200ResponseFromJSONTyped(json, false);
}
function PublicExkConfigGet200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'circulatingSupply': json['circulating_supply'],
        'lastReserveValueUsd': json['last_reserve_value_usd'],
        'mintRate': json['mint_rate'],
        'lpSharePercentToExk': json['lp_share_percent_to_exk'],
        'routes': ((0, runtime_1.mapValues)(json['routes'], PublicExkConfigGet200ResponseRoutesValue_1.PublicExkConfigGet200ResponseRoutesValueFromJSON)),
        'userLevels': (json['user_levels'].map(PublicExkConfigGet200ResponseUserLevelsInner_1.PublicExkConfigGet200ResponseUserLevelsInnerFromJSON)),
        'weeklyDist': (0, PublicExkConfigGet200ResponseWeeklyDist_1.PublicExkConfigGet200ResponseWeeklyDistFromJSON)(json['weekly_dist']),
    };
}
function PublicExkConfigGet200ResponseToJSON(json) {
    return PublicExkConfigGet200ResponseToJSONTyped(json, false);
}
function PublicExkConfigGet200ResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'circulating_supply': value['circulatingSupply'],
        'last_reserve_value_usd': value['lastReserveValueUsd'],
        'mint_rate': value['mintRate'],
        'lp_share_percent_to_exk': value['lpSharePercentToExk'],
        'routes': ((0, runtime_1.mapValues)(value['routes'], PublicExkConfigGet200ResponseRoutesValue_1.PublicExkConfigGet200ResponseRoutesValueToJSON)),
        'user_levels': (value['userLevels'].map(PublicExkConfigGet200ResponseUserLevelsInner_1.PublicExkConfigGet200ResponseUserLevelsInnerToJSON)),
        'weekly_dist': (0, PublicExkConfigGet200ResponseWeeklyDist_1.PublicExkConfigGet200ResponseWeeklyDistToJSON)(value['weeklyDist']),
    };
}
