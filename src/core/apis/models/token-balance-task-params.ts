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
 * @interface TokenBalanceTaskParams
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface TokenBalanceTaskParams {
  /**
   *
   * @type {boolean}
   * @memberof TokenBalanceTaskParams
   */
  pick_from_list: boolean;
  /**
   *
   * @type {string}
   * @memberof TokenBalanceTaskParams
   */
  token_name: string;
  /**
   *
   * @type {string}
   * @memberof TokenBalanceTaskParams
   */
  token_contract_addr: string;
  /**
   *
   * @type {string}
   * @memberof TokenBalanceTaskParams
   */
  network: string;
  /**
   *
   * @type {string}
   * @memberof TokenBalanceTaskParams
   */
  min_balance: string;
  /**
   *
   * @type {string}
   * @memberof TokenBalanceTaskParams
   */
  extra?: string;
}
