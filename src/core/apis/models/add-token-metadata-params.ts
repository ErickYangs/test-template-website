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
 * @interface AddTokenMetadataParams
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AddTokenMetadataParams {
  /**
   *
   * @type {string}
   * @memberof AddTokenMetadataParams
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof AddTokenMetadataParams
   */
  token_address: string;
  /**
   *
   * @type {string}
   * @memberof AddTokenMetadataParams
   */
  symbol: string;
  /**
   * 精度
   * @type {number}
   * @memberof AddTokenMetadataParams
   */
  decimals: number;
  /**
   *
   * @type {string}
   * @memberof AddTokenMetadataParams
   */
  chain?: string;
}