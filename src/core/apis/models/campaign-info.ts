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

import { AutomaticallyWinnerDrawType } from "./automatically-winner-draw-type";
import { CampaignInfoAudit } from "./campaign-info-audit";
import { ChainType } from "./chain-type";
import { CombineCampaignOperateTextInfo } from "./combine-campaign-operate-text-info";
import { EligibilityValueItem } from "./eligibility-value-item";
import { RewardInfo } from "./reward-info";
import { TaskValueItem } from "./task-value-item";
import { WinnerDrawType } from "./winner-draw-type";

/**
 *
 * @export
 * @interface CampaignInfo
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CampaignInfo {
  /**
   *
   * @type {number}
   * @memberof CampaignInfo
   */
  id: number;
  /**
   *
   * @type {string}
   * @memberof CampaignInfo
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CampaignInfo
   */
  desc: string;
  /**
   * userId of creator
   * @type {number}
   * @memberof CampaignInfo
   */
  owner_id: number;
  /**
   * 未设置返回空字符串
   * @type {string}
   * @memberof CampaignInfo
   */
  owner_name: string;
  /**
   *
   * @type {string}
   * @memberof CampaignInfo
   */
  owner_avatar: string;
  /**
   *
   * @type {string}
   * @memberof CampaignInfo
   */
  owner_address: string;
  /**
   *
   * @type {string}
   * @memberof CampaignInfo
   */
  image: string;
  /**
   *
   * @type {boolean}
   * @memberof CampaignInfo
   */
  recaptcha: boolean;
  /**
   * campaign 条件表达式，目前为or或者and
   * @type {string}
   * @memberof CampaignInfo
   */
  eligibility_express?: string;
  /**
   *
   * @type {boolean}
   * @memberof CampaignInfo
   */
  is_draft: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CampaignInfo
   */
  is_removed: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CampaignInfo
   */
  is_end: boolean;
  /**
   *
   * @type {number}
   * @memberof CampaignInfo
   */
  campaign_level: number;
  /**
   * 活动开始时间
   * @type {number}
   * @memberof CampaignInfo
   */
  start_time: number;
  /**
   * 活动结束时间
   * @type {number}
   * @memberof CampaignInfo
   */
  end_time: number;
  /**
   * 最大winner 人数
   * @type {number}
   * @memberof CampaignInfo
   */
  max_winners: number;
  /**
   *
   * @type {WinnerDrawType}
   * @memberof CampaignInfo
   */
  winner_draw_type: WinnerDrawType;
  /**
   *
   * @type {AutomaticallyWinnerDrawType}
   * @memberof CampaignInfo
   */
  automatically_winner_draw_type: AutomaticallyWinnerDrawType;
  /**
   *
   * @type {CombineCampaignOperateTextInfo}
   * @memberof CampaignInfo
   */
  combine_campaign_op_text?: CombineCampaignOperateTextInfo;
  /**
   *
   * @type {CampaignInfoAudit}
   * @memberof CampaignInfo
   */
  audit?: CampaignInfoAudit;
  /**
   *
   * @type {Array<EligibilityValueItem>}
   * @memberof CampaignInfo
   */
  eligs: Array<EligibilityValueItem>;
  /**
   *
   * @type {Array<TaskValueItem>}
   * @memberof CampaignInfo
   */
  tasks: Array<TaskValueItem>;
  /**
   *
   * @type {Array<RewardInfo>}
   * @memberof CampaignInfo
   */
  qualifier_rewards: Array<RewardInfo>;
  /**
   *
   * @type {Array<RewardInfo>}
   * @memberof CampaignInfo
   */
  winner_rewards: Array<RewardInfo>;
  /**
   *
   * @type {Array<ChainType>}
   * @memberof CampaignInfo
   */
  chain_types: Array<ChainType>;
  /**
   * 请求是否来自允许的国家
   * @type {boolean}
   * @memberof CampaignInfo
   */
  from_supported_country: boolean;
}
