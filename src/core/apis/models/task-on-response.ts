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

import { InlineResponse200Error1 } from "./inline-response200-error1";

/**
 *
 * @export
 * @interface TaskOnResponse
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TaskOnResponse {
  /**
   * 成功或者失败
   * @type {boolean}
   * @memberof TaskOnResponse
   */
  result?: boolean;
  /**
   *
   * @type {InlineResponse200Error1}
   * @memberof TaskOnResponse
   */
  error1?: InlineResponse200Error1;
}
