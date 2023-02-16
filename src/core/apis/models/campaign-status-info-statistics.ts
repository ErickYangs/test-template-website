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
 * 人数统计信息
 * @export
 * @interface CampaignStatusInfoStatistics
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CampaignStatusInfoStatistics {
  /**
   * 访问人数
   * @type {number}
   * @memberof CampaignStatusInfoStatistics
   */
  visitor_number: number;
  /**
   * 参与人数
   * @type {number}
   * @memberof CampaignStatusInfoStatistics
   */
  participant_number: number;
  /**
   * 完成人数
   * @type {number}
   * @memberof CampaignStatusInfoStatistics
   */
  submitter_number: number;
  /**
   * qualifier 人数
   * @type {number}
   * @memberof CampaignStatusInfoStatistics
   */
  qualifier_number: number;
  /**
   * winner 人数
   * @type {number}
   * @memberof CampaignStatusInfoStatistics
   */
  winner_number: number;
}