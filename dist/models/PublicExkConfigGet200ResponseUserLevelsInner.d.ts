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
 *
 * @export
 * @interface PublicExkConfigGet200ResponseUserLevelsInner
 */
export interface PublicExkConfigGet200ResponseUserLevelsInner {
    /**
     *
     * @type {number}
     * @memberof PublicExkConfigGet200ResponseUserLevelsInner
     */
    pointsFactor: number;
    /**
     *
     * @type {string}
     * @memberof PublicExkConfigGet200ResponseUserLevelsInner
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PublicExkConfigGet200ResponseUserLevelsInner
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof PublicExkConfigGet200ResponseUserLevelsInner
     */
    icon: string;
    /**
     *
     * @type {number}
     * @memberof PublicExkConfigGet200ResponseUserLevelsInner
     */
    requiredPoints: number;
    /**
     *
     * @type {Array<string>}
     * @memberof PublicExkConfigGet200ResponseUserLevelsInner
     */
    benefits: Array<string>;
}
/**
 * Check if a given object implements the PublicExkConfigGet200ResponseUserLevelsInner interface.
 */
export declare function instanceOfPublicExkConfigGet200ResponseUserLevelsInner(value: object): value is PublicExkConfigGet200ResponseUserLevelsInner;
export declare function PublicExkConfigGet200ResponseUserLevelsInnerFromJSON(json: any): PublicExkConfigGet200ResponseUserLevelsInner;
export declare function PublicExkConfigGet200ResponseUserLevelsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicExkConfigGet200ResponseUserLevelsInner;
export declare function PublicExkConfigGet200ResponseUserLevelsInnerToJSON(json: any): PublicExkConfigGet200ResponseUserLevelsInner;
export declare function PublicExkConfigGet200ResponseUserLevelsInnerToJSONTyped(value?: PublicExkConfigGet200ResponseUserLevelsInner | null, ignoreDiscriminator?: boolean): any;
