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
 * @interface UserTokenListItem
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserTokenListItem {
  /**
   *
   * @type {string}
   * @memberof UserTokenListItem
   */
  token_symbol: string;
  /**
   *
   * @type {number}
   * @memberof UserTokenListItem
   */
  token_id: number;
  /**
   * 图标
   * @type {string}
   * @memberof UserTokenListItem
   */
  token_icon: string;
  /**
   *
   * @type {string}
   * @memberof UserTokenListItem
   */
  chain: string;
  /**
   *
   * @type {string}
   * @memberof UserTokenListItem
   */
  chain_label: string;
  /**
   *
   * @type {string}
   * @memberof UserTokenListItem
   */
  chain_icon: string;
  /**
   *
   * @type {string}
   * @memberof UserTokenListItem
   */
  avail_balance: string;
}