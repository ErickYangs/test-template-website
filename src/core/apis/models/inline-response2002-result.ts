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

import { CampaignListItem } from "./campaign-list-item";

/**
 *
 * @export
 * @interface InlineResponse2002Result
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InlineResponse2002Result {
  /**
   *
   * @type {Array<CampaignListItem>}
   * @memberof InlineResponse2002Result
   */
  data: Array<CampaignListItem>;
  /**
   *
   * @type {number}
   * @memberof InlineResponse2002Result
   */
  total: number;
}
