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

import { SnsType } from "./sns-type";

/**
 *
 * @export
 * @interface UnbindSnsParams
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UnbindSnsParams {
  /**
   *
   * @type {SnsType}
   * @memberof UnbindSnsParams
   */
  sns_type: SnsType;
  /**
   *
   * @type {string}
   * @memberof UnbindSnsParams
   */
  sns_id: string;
}
