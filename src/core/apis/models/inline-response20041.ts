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

import { InlineResponse20041Result } from "./inline-response20041-result";
import { InlineResponse200Error1 } from "./inline-response200-error1";

/**
 *
 * @export
 * @interface InlineResponse20041
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InlineResponse20041 {
  /**
   *
   * @type {InlineResponse200Error1}
   * @memberof InlineResponse20041
   */
  error1?: InlineResponse200Error1;
  /**
   *
   * @type {InlineResponse20041Result}
   * @memberof InlineResponse20041
   */
  result: InlineResponse20041Result;
}
