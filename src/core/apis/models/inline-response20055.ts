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
import { UserTokenTxHistoryList } from "./user-token-tx-history-list";

/**
 *
 * @export
 * @interface InlineResponse20055
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InlineResponse20055 {
  /**
   *
   * @type {InlineResponse200Error1}
   * @memberof InlineResponse20055
   */
  error1?: InlineResponse200Error1;
  /**
   *
   * @type {UserTokenTxHistoryList}
   * @memberof InlineResponse20055
   */
  result: UserTokenTxHistoryList;
}
