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
import type { PublicPoolsGet200ResponseInnerEarned24h } from './PublicPoolsGet200ResponseInnerEarned24h';
/**
 *
 * @export
 * @interface PublicPoolsFeesHistoryGet200ResponseInner
 */
export interface PublicPoolsFeesHistoryGet200ResponseInner {
    /**
     *
     * @type {number}
     * @memberof PublicPoolsFeesHistoryGet200ResponseInner
     */
    timestamp: number;
    /**
     *
     * @type {PublicPoolsGet200ResponseInnerEarned24h}
     * @memberof PublicPoolsFeesHistoryGet200ResponseInner
     */
    fees: PublicPoolsGet200ResponseInnerEarned24h;
}
/**
 * Check if a given object implements the PublicPoolsFeesHistoryGet200ResponseInner interface.
 */
export declare function instanceOfPublicPoolsFeesHistoryGet200ResponseInner(value: object): value is PublicPoolsFeesHistoryGet200ResponseInner;
export declare function PublicPoolsFeesHistoryGet200ResponseInnerFromJSON(json: any): PublicPoolsFeesHistoryGet200ResponseInner;
export declare function PublicPoolsFeesHistoryGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicPoolsFeesHistoryGet200ResponseInner;
export declare function PublicPoolsFeesHistoryGet200ResponseInnerToJSON(json: any): PublicPoolsFeesHistoryGet200ResponseInner;
export declare function PublicPoolsFeesHistoryGet200ResponseInnerToJSONTyped(value?: PublicPoolsFeesHistoryGet200ResponseInner | null, ignoreDiscriminator?: boolean): any;
