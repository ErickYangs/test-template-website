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

import { LockedNftListItem } from "./locked-nft-list-item";

/**
 *
 * @export
 * @interface LockedNftList
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LockedNftList {
  /**
   *
   * @type {Array<LockedNftListItem>}
   * @memberof LockedNftList
   */
  data: Array<LockedNftListItem>;
  /**
   *
   * @type {number}
   * @memberof LockedNftList
   */
  total: number;
}
