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

import { CombineCampaignOperateTextItem } from "./combine-campaign-operate-text-item";

/**
 *
 * @export
 * @interface CombineCampaignOperateTextInfo
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CombineCampaignOperateTextInfo {
  /**
   * 活动文案
   * @type {string}
   * @memberof CombineCampaignOperateTextInfo
   */
  text: string;
  /**
   *
   * @type {Array<CombineCampaignOperateTextItem>}
   * @memberof CombineCampaignOperateTextInfo
   */
  campaigns: Array<CombineCampaignOperateTextItem>;
}