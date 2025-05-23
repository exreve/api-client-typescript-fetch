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
import type { PublicFundsTransparencyGet200ResponseStatsValue } from './PublicFundsTransparencyGet200ResponseStatsValue';
import type { PublicFundsTransparencyGet200ResponseFundsValueValue } from './PublicFundsTransparencyGet200ResponseFundsValueValue';
/**
 *
 * @export
 * @interface PublicFundsTransparencyGet200Response
 */
export interface PublicFundsTransparencyGet200Response {
    /**
     *
     * @type {number}
     * @memberof PublicFundsTransparencyGet200Response
     */
    timestamp: number;
    /**
     *
     * @type {{ [key: string]: { [key: string]: PublicFundsTransparencyGet200ResponseFundsValueValue | undefined; } | undefined; }}
     * @memberof PublicFundsTransparencyGet200Response
     */
    funds: {
        [key: string]: {
            [key: string]: PublicFundsTransparencyGet200ResponseFundsValueValue | undefined;
        } | undefined;
    };
    /**
     *
     * @type {{ [key: string]: PublicFundsTransparencyGet200ResponseStatsValue | undefined; }}
     * @memberof PublicFundsTransparencyGet200Response
     */
    stats: {
        [key: string]: PublicFundsTransparencyGet200ResponseStatsValue | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof PublicFundsTransparencyGet200Response
     */
    addressesLabels: {
        [key: string]: string | undefined;
    };
}
/**
 * Check if a given object implements the PublicFundsTransparencyGet200Response interface.
 */
export declare function instanceOfPublicFundsTransparencyGet200Response(value: object): value is PublicFundsTransparencyGet200Response;
export declare function PublicFundsTransparencyGet200ResponseFromJSON(json: any): PublicFundsTransparencyGet200Response;
export declare function PublicFundsTransparencyGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicFundsTransparencyGet200Response;
export declare function PublicFundsTransparencyGet200ResponseToJSON(json: any): PublicFundsTransparencyGet200Response;
export declare function PublicFundsTransparencyGet200ResponseToJSONTyped(value?: PublicFundsTransparencyGet200Response | null, ignoreDiscriminator?: boolean): any;
