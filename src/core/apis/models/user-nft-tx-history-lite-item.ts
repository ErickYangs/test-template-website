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

import { TxStatus } from "./tx-status";
import { TxType } from "./tx-type";

/**
 *
 * @export
 * @interface UserNftTxHistoryLiteItem
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserNftTxHistoryLiteItem {
  /**
   *
   * @type {number}
   * @memberof UserNftTxHistoryLiteItem
   */
  tx_id: number;
  /**
   *
   * @type {TxType}
   * @memberof UserNftTxHistoryLiteItem
   */
  tx_type: TxType;
  /**
   *
   * @type {TxStatus}
   * @memberof UserNftTxHistoryLiteItem
   */
  tx_status: TxStatus;
  /**
   *
   * @type {string}
   * @memberof UserNftTxHistoryLiteItem
   */
  chain: string;
  /**
   *
   * @type {number}
   * @memberof UserNftTxHistoryLiteItem
   */
  collection_id: number;
  /**
   *
   * @type {string}
   * @memberof UserNftTxHistoryLiteItem
   */
  collection_name: string;
  /**
   *
   * @type {number}
   * @memberof UserNftTxHistoryLiteItem
   */
  quantity: number;
  /**
   *
   * @type {string}
   * @memberof UserNftTxHistoryLiteItem
   */
  token_id: string;
  /**
   *
   * @type {string}
   * @memberof UserNftTxHistoryLiteItem
   */
  tx_hash: string;
  /**
   * 毫秒时间值
   * @type {number}
   * @memberof UserNftTxHistoryLiteItem
   */
  tx_time: number;
}
