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
import type { PublicMarketsGet200ResponseInnerLimits } from './PublicMarketsGet200ResponseInnerLimits';
import type { PublicMarketsGet200ResponseInnerPrecision } from './PublicMarketsGet200ResponseInnerPrecision';
/**
 *
 * @export
 * @interface PublicMarketsGet200ResponseInner
 */
export interface PublicMarketsGet200ResponseInner {
    /**
     *
     * @type {string}
     * @memberof PublicMarketsGet200ResponseInner
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof PublicMarketsGet200ResponseInner
     */
    base: string;
    /**
     *
     * @type {string}
     * @memberof PublicMarketsGet200ResponseInner
     */
    quote: string;
    /**
     *
     * @type {PublicMarketsGet200ResponseInnerPrecision}
     * @memberof PublicMarketsGet200ResponseInner
     */
    precision: PublicMarketsGet200ResponseInnerPrecision;
    /**
     *
     * @type {PublicMarketsGet200ResponseInnerLimits}
     * @memberof PublicMarketsGet200ResponseInner
     */
    limits: PublicMarketsGet200ResponseInnerLimits;
    /**
     *
     * @type {any}
     * @memberof PublicMarketsGet200ResponseInner
     */
    active?: any | null;
}
/**
 * Check if a given object implements the PublicMarketsGet200ResponseInner interface.
 */
export declare function instanceOfPublicMarketsGet200ResponseInner(value: object): value is PublicMarketsGet200ResponseInner;
export declare function PublicMarketsGet200ResponseInnerFromJSON(json: any): PublicMarketsGet200ResponseInner;
export declare function PublicMarketsGet200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicMarketsGet200ResponseInner;
export declare function PublicMarketsGet200ResponseInnerToJSON(json: any): PublicMarketsGet200ResponseInner;
export declare function PublicMarketsGet200ResponseInnerToJSONTyped(value?: PublicMarketsGet200ResponseInner | null, ignoreDiscriminator?: boolean): any;
