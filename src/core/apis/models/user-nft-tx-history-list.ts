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

import { UserNftTxHistoryLiteItem } from "./user-nft-tx-history-lite-item";

/**
 *
 * @export
 * @interface UserNftTxHistoryList
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserNftTxHistoryList {
  /**
   *
   * @type {Array<UserNftTxHistoryLiteItem>}
   * @memberof UserNftTxHistoryList
   */
  data: Array<UserNftTxHistoryLiteItem>;
  /**
   *
   * @type {number}
   * @memberof UserNftTxHistoryList
   */
  total: number;
}
