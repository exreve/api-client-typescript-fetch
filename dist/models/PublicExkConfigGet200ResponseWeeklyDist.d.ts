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
 * @interface PublicExkConfigGet200ResponseWeeklyDist
 */
export interface PublicExkConfigGet200ResponseWeeklyDist {
    /**
     *
     * @type {number}
     * @memberof PublicExkConfigGet200ResponseWeeklyDist
     */
    cycleId: number;
    /**
     *
     * @type {number}
     * @memberof PublicExkConfigGet200ResponseWeeklyDist
     */
    timestampToNextDist: number;
    /**
     *
     * @type {number}
     * @memberof PublicExkConfigGet200ResponseWeeklyDist
     */
    totalPoints: number;
    /**
     *
     * @type {{ [key: string]: number | undefined; }}
     * @memberof PublicExkConfigGet200ResponseWeeklyDist
     */
    pointsFor: {
        [key: string]: number | undefined;
    };
}
/**
 * Check if a given object implements the PublicExkConfigGet200ResponseWeeklyDist interface.
 */
export declare function instanceOfPublicExkConfigGet200ResponseWeeklyDist(value: object): value is PublicExkConfigGet200ResponseWeeklyDist;
export declare function PublicExkConfigGet200ResponseWeeklyDistFromJSON(json: any): PublicExkConfigGet200ResponseWeeklyDist;
export declare function PublicExkConfigGet200ResponseWeeklyDistFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicExkConfigGet200ResponseWeeklyDist;
export declare function PublicExkConfigGet200ResponseWeeklyDistToJSON(json: any): PublicExkConfigGet200ResponseWeeklyDist;
export declare function PublicExkConfigGet200ResponseWeeklyDistToJSONTyped(value?: PublicExkConfigGet200ResponseWeeklyDist | null, ignoreDiscriminator?: boolean): any;
