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

import { EligibilityTemplateId } from "./eligibility-template-id";

/**
 *
 * @export
 * @interface EligibilityValueItem
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface EligibilityValueItem {
  /**
   * eligibility Id
   * @type {number}
   * @memberof EligibilityValueItem
   */
  id: number;
  /**
   *
   * @type {EligibilityTemplateId}
   * @memberof EligibilityValueItem
   */
  template_id: EligibilityTemplateId;
  /**
   * eligibility json 字符串
   * @type {string}
   * @memberof EligibilityValueItem
   */
  params: string;
}
