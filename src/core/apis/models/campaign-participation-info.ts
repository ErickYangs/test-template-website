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

import { CampaignStatisticsInfo } from "./campaign-statistics-info";
import { TaskStatisticsInfo } from "./task-statistics-info";

/**
 *
 * @export
 * @interface CampaignParticipationInfo
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CampaignParticipationInfo {
  /**
   *
   * @type {CampaignStatisticsInfo}
   * @memberof CampaignParticipationInfo
   */
  campaign_statistics: CampaignStatisticsInfo;
  /**
   *
   * @type {Array<TaskStatisticsInfo>}
   * @memberof CampaignParticipationInfo
   */
  task_statistics: Array<TaskStatisticsInfo>;
  /**
   *
   * @type {Array<number>}
   * @memberof CampaignParticipationInfo
   */
  task_qualifier_wait_upload: Array<number>;
}
