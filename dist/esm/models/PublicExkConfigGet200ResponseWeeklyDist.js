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
 * Check if a given object implements the PublicExkConfigGet200ResponseWeeklyDist interface.
 */
export function instanceOfPublicExkConfigGet200ResponseWeeklyDist(value) {
    if (!('cycleId' in value) || value['cycleId'] === undefined)
        return false;
    if (!('timestampToNextDist' in value) || value['timestampToNextDist'] === undefined)
        return false;
    if (!('totalPoints' in value) || value['totalPoints'] === undefined)
        return false;
    if (!('pointsFor' in value) || value['pointsFor'] === undefined)
        return false;
    return true;
}
export function PublicExkConfigGet200ResponseWeeklyDistFromJSON(json) {
    return PublicExkConfigGet200ResponseWeeklyDistFromJSONTyped(json, false);
}
export function PublicExkConfigGet200ResponseWeeklyDistFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'cycleId': json['cycle_id'],
        'timestampToNextDist': json['timestamp_to_next_dist'],
        'totalPoints': json['total_points'],
        'pointsFor': json['points_for'],
    };
}
export function PublicExkConfigGet200ResponseWeeklyDistToJSON(json) {
    return PublicExkConfigGet200ResponseWeeklyDistToJSONTyped(json, false);
}
export function PublicExkConfigGet200ResponseWeeklyDistToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'cycle_id': value['cycleId'],
        'timestamp_to_next_dist': value['timestampToNextDist'],
        'total_points': value['totalPoints'],
        'points_for': value['pointsFor'],
    };
}
