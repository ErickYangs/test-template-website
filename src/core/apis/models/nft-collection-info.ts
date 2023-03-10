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

import { Chain } from "./chain";
import { NftType } from "./nft-type";

/**
 *
 * @export
 * @interface NftCollectionInfo
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NftCollectionInfo {
  /**
   * Nft collection name
   * @type {string}
   * @memberof NftCollectionInfo
   */
  name: string;
  /**
   * Nft collection symbol
   * @type {string}
   * @memberof NftCollectionInfo
   */
  symbol: string;
  /**
   *
   * @type {Chain}
   * @memberof NftCollectionInfo
   */
  chain: Chain;
  /**
   * nft contract  address
   * @type {string}
   * @memberof NftCollectionInfo
   */
  token_address?: string;
  /**
   *
   * @type {NftType}
   * @memberof NftCollectionInfo
   */
  contract_type?: NftType;
}
