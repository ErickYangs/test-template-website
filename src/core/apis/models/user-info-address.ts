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

import { ChainType } from "./chain-type";

/**
 *
 * @export
 * @interface UserInfoAddress
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserInfoAddress {
  /**
   *
   * @type {ChainType}
   * @memberof UserInfoAddress
   */
  chain_type: ChainType;
  /**
   * 钱包地址
   * @type {string}
   * @memberof UserInfoAddress
   */
  address: string;
}
