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

import { InlineResponse20033Result } from "./inline-response20033-result";
import { InlineResponse200Error1 } from "./inline-response200-error1";

/**
 *
 * @export
 * @interface InlineResponse20033
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InlineResponse20033 {
  /**
   *
   * @type {InlineResponse200Error1}
   * @memberof InlineResponse20033
   */
  error1?: InlineResponse200Error1;
  /**
   *
   * @type {InlineResponse20033Result}
   * @memberof InlineResponse20033
   */
  result?: InlineResponse20033Result;
}
