/**
 * TaskOn
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 *
 * @export
 * @interface UserEligibilityInfo
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserEligibilityInfo {
  /**
   * eligibility of not eligibility
   * @type {boolean}
   * @memberof UserEligibilityInfo
   */
  result: boolean;
  /**
   *
   * @type {Array<boolean>}
   * @memberof UserEligibilityInfo
   */
  details: Array<boolean>;
}
