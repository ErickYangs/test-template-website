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

import { NftType } from "./nft-type";

/**
 *
 * @export
 * @interface InlineResponse20027Result
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InlineResponse20027Result {
  /**
   * Nft collection name
   * @type {string}
   * @memberof InlineResponse20027Result
   */
  name: string;
  /**
   * Nft collection symbol
   * @type {string}
   * @memberof InlineResponse20027Result
   */
  symbol: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20027Result
   */
  chain: string;
  /**
   * nft contract  address
   * @type {string}
   * @memberof InlineResponse20027Result
   */
  token_address?: string;
  /**
   *
   * @type {NftType}
   * @memberof InlineResponse20027Result
   */
  contract_type?: NftType;
}