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
 * @export
 */
export const PrivateOrdersPostRequestTypeEnum = {
    Market: 'market',
    Limit: 'limit'
};
/**
 * @export
 */
export const PrivateOrdersPostRequestSideEnum = {
    Buy: 'buy',
    Sell: 'sell'
};
/**
 * Check if a given object implements the PrivateOrdersPostRequest interface.
 */
export function instanceOfPrivateOrdersPostRequest(value) {
    if (!('symbol' in value) || value['symbol'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('side' in value) || value['side'] === undefined)
        return false;
    return true;
}
export function PrivateOrdersPostRequestFromJSON(json) {
    return PrivateOrdersPostRequestFromJSONTyped(json, false);
}
export function PrivateOrdersPostRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'symbol': json['symbol'],
        'type': json['type'],
        'side': json['side'],
        'quantity': json['quantity'] == null ? undefined : json['quantity'],
        'cost': json['cost'] == null ? undefined : json['cost'],
        'price': json['price'] == null ? undefined : json['price'],
        'clientOrderId': json['client_order_id'] == null ? undefined : json['client_order_id'],
    };
}
export function PrivateOrdersPostRequestToJSON(json) {
    return PrivateOrdersPostRequestToJSONTyped(json, false);
}
export function PrivateOrdersPostRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'symbol': value['symbol'],
        'type': value['type'],
        'side': value['side'],
        'quantity': value['quantity'],
        'cost': value['cost'],
        'price': value['price'],
        'client_order_id': value['clientOrderId'],
    };
}
