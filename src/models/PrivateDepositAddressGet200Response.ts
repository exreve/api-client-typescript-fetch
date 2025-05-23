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

import { mapValues } from '../runtime';
import type { PublicNetworksGet200ResponseInner } from './PublicNetworksGet200ResponseInner';
import {
    PublicNetworksGet200ResponseInnerFromJSON,
    PublicNetworksGet200ResponseInnerFromJSONTyped,
    PublicNetworksGet200ResponseInnerToJSON,
    PublicNetworksGet200ResponseInnerToJSONTyped,
} from './PublicNetworksGet200ResponseInner';
import type { PublicCurrenciesGet200ResponseInner } from './PublicCurrenciesGet200ResponseInner';
import {
    PublicCurrenciesGet200ResponseInnerFromJSON,
    PublicCurrenciesGet200ResponseInnerFromJSONTyped,
    PublicCurrenciesGet200ResponseInnerToJSON,
    PublicCurrenciesGet200ResponseInnerToJSONTyped,
} from './PublicCurrenciesGet200ResponseInner';

/**
 * 
 * @export
 * @interface PrivateDepositAddressGet200Response
 */
export interface PrivateDepositAddressGet200Response {
    /**
     * 
     * @type {string}
     * @memberof PrivateDepositAddressGet200Response
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof PrivateDepositAddressGet200Response
     */
    minDepositAmount: string;
    /**
     * 
     * @type {PublicCurrenciesGet200ResponseInner}
     * @memberof PrivateDepositAddressGet200Response
     */
    currencyDetails: PublicCurrenciesGet200ResponseInner;
    /**
     * 
     * @type {PublicNetworksGet200ResponseInner}
     * @memberof PrivateDepositAddressGet200Response
     */
    networkDetails: PublicNetworksGet200ResponseInner;
    /**
     * 
     * @type {any}
     * @memberof PrivateDepositAddressGet200Response
     */
    active?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PrivateDepositAddressGet200Response
     */
    memo?: string;
}

/**
 * Check if a given object implements the PrivateDepositAddressGet200Response interface.
 */
export function instanceOfPrivateDepositAddressGet200Response(value: object): value is PrivateDepositAddressGet200Response {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('minDepositAmount' in value) || value['minDepositAmount'] === undefined) return false;
    if (!('currencyDetails' in value) || value['currencyDetails'] === undefined) return false;
    if (!('networkDetails' in value) || value['networkDetails'] === undefined) return false;
    return true;
}

export function PrivateDepositAddressGet200ResponseFromJSON(json: any): PrivateDepositAddressGet200Response {
    return PrivateDepositAddressGet200ResponseFromJSONTyped(json, false);
}

export function PrivateDepositAddressGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrivateDepositAddressGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'minDepositAmount': json['min_deposit_amount'],
        'currencyDetails': PublicCurrenciesGet200ResponseInnerFromJSON(json['currencyDetails']),
        'networkDetails': PublicNetworksGet200ResponseInnerFromJSON(json['networkDetails']),
        'active': json['active'] == null ? undefined : json['active'],
        'memo': json['memo'] == null ? undefined : json['memo'],
    };
}

export function PrivateDepositAddressGet200ResponseToJSON(json: any): PrivateDepositAddressGet200Response {
    return PrivateDepositAddressGet200ResponseToJSONTyped(json, false);
}

export function PrivateDepositAddressGet200ResponseToJSONTyped(value?: PrivateDepositAddressGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'min_deposit_amount': value['minDepositAmount'],
        'currencyDetails': PublicCurrenciesGet200ResponseInnerToJSON(value['currencyDetails']),
        'networkDetails': PublicNetworksGet200ResponseInnerToJSON(value['networkDetails']),
        'active': value['active'],
        'memo': value['memo'],
    };
}

