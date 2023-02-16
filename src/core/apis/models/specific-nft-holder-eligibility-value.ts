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
 * @interface SpecificNftHolderEligibilityValue
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SpecificNftHolderEligibilityValue {
  /**
   *
   * @type {string}
   * @memberof SpecificNftHolderEligibilityValue
   */
  pick_from_list: string;
  /**
   *
   * @type {string}
   * @memberof SpecificNftHolderEligibilityValue
   */
  nft_address: string;
  /**
   *
   * @type {string}
   * @memberof SpecificNftHolderEligibilityValue
   */
  chain: string;
  /**
   *
   * @type {string}
   * @memberof SpecificNftHolderEligibilityValue
   */
  nft_type: string;
  /**
   *
   * @type {number}
   * @memberof SpecificNftHolderEligibilityValue
   */
  amount: number;
  /**
   *
   * @type {string}
   * @memberof SpecificNftHolderEligibilityValue
   */
  nft_name: string;
  /**
   *
   * @type {string}
   * @memberof SpecificNftHolderEligibilityValue
   */
  chain_label: string;
  /**
   * nftType 为1155时必须
   * @type {Array<number>}
   * @memberof SpecificNftHolderEligibilityValue
   */
  erc_1155_ids?: Array<number>;
}
