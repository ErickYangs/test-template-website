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

import { LockedTokenListItem } from "./locked-token-list-item";

/**
 *
 * @export
 * @interface LockedTokenList
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LockedTokenList {
  /**
   *
   * @type {Array<LockedTokenListItem>}
   * @memberof LockedTokenList
   */
  data: Array<LockedTokenListItem>;
  /**
   *
   * @type {number}
   * @memberof LockedTokenList
   */
  total: number;
}
