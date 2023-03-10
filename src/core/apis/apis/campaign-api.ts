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
import { AxiosRequestConfig } from "axios";
import request from "@/core/utils/request";
import {
  AddNftCollectionMetadataParams,
  AddTokenMetadataParams,
  GetCampaignUserListParams,
  GetTaskUserListParams,
  InlineObject11,
  InlineObject13,
  InlineObject16,
  InlineObject18,
  InlineObject2,
  InlineObject21,
  InlineObject23,
  InlineObject24,
  InlineObject26,
  InlineObject7,
  InlineResponse20017,
  InlineResponse20019,
  InlineResponse2002,
  InlineResponse20020,
  InlineResponse20021,
  InlineResponse20022,
  InlineResponse20025,
  InlineResponse20026,
  InlineResponse20027,
  InlineResponse20028,
  InlineResponse20029,
  InlineResponse2003,
  InlineResponse20030,
  InlineResponse20031,
  InlineResponse20032,
  InlineResponse20033,
  InlineResponse20036,
  InlineResponse20037,
  InlineResponse20038,
  InlineResponse20039,
  InlineResponse2004,
  InlineResponse20040,
  InlineResponse20042,
  InlineResponse20044,
  InlineResponse20047,
  InlineResponse20048,
  InlineResponse20049,
  InlineResponse2005,
  InlineResponse20051,
  InlineResponse2006,
  InlineResponse2008,
  InlineResponse2009,
  SetCampaignParams,
  SubmitCampaignParams,
  SubmitTaskParams,
  TaskOnResponse,
  TokenAddress,
} from "../models";

/**
 * CampaignApi -
 * @export
 */
export const CampaignApi = {
  /**
   *
   * @summary 用户新NFT元数据
   * @param {AddNftCollectionMetadataParams} [addNftCollectionMetadataParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1AddNftCollectionMetadataPost(
    addNftCollectionMetadataParams?: AddNftCollectionMetadataParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20039>({
      url: "/v1/addNftCollectionMetadata",
      method: "POST",
      data: addNftCollectionMetadataParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 用户新ERC20 token 元数据
   * @param {AddTokenMetadataParams} [addTokenMetadataParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1AddTokenMetadataPost(
    addTokenMetadataParams?: AddTokenMetadataParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20039>({
      url: "/v1/addTokenMetadata",
      method: "POST",
      data: addTokenMetadataParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 不需要上传winner的一直返回true
   * @summary 获取Campaign 所有Task的qualifiers 是否 已经上传
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1CampaignAllTaskQualifierGeneratedPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/campaignAllTaskQualifierGenerated",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 撤销Campaign
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1CampaignRecallPost(body?: number, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/campaignRecall",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 不需要上传winner的一直返回true
   * @summary 获取Campaign winners是否 已经上传
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1CampaignWinnerGeneratedPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/campaignWinnerGenerated",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 检查用户获取是否有活动资格
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1CheckUserCampaignEligibilityPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20032>({
      url: "/v1/checkUserCampaignEligibility",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 领取活动奖励的NFT
   * @param {InlineObject16} [inlineObject16]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1ClaimCampaignRewardNftPost(
    inlineObject16?: InlineObject16,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20038>({
      url: "/v1/claimCampaignRewardNft",
      method: "POST",
      data: inlineObject16,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 确认Campiagn winners
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1ConfirmCampaignWinnersPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/confirmCampaignWinners",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 确认Task Qualifiers
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1ConfirmTaskQualifiersPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/confirmTaskQualifiers",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 在Campaign Draft状态下，B可以删除
   * @summary 删除Campaign
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1DelCampaignPost(body?: number, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/delCampaign",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 下载Campaign数据
   * @param {InlineObject11} [inlineObject11]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1DownloadCampaignDataPost(
    inlineObject11?: InlineObject11,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20031>({
      url: "/v1/downloadCampaignData",
      method: "POST",
      data: inlineObject11,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 下载活动认可者名单
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1DownloadCampaignQualifierListPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20040>({
      url: "/v1/downloadCampaignQualifierList",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 下载获胜者名单
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1DownloadCampaignWinnerListPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20042>({
      url: "/v1/downloadCampaignWinnerList",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 比如可以用户下载pow的submitter 用户地址
   * @summary 下载Task的submitter用户
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1DownloadTaskSubmittersPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20031>({
      url: "/v1/downloadTaskSubmitters",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 获取Campaign 详情信息
   * @summary 查询Campaign详情
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignInfoPost(body?: number, options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20019>({
      url: "/v1/getCampaignInfo",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 按多种条件查询Campaign列表，比如查询首页置顶活动列表、查询explorer页活动列表、查询用户参与的活动列表、 查询用户创建的活动列表
   * @summary 查询Campaign列表
   * @param {InlineObject2} [inlineObject2]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignListPost(
    inlineObject2?: InlineObject2,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse2002>({
      url: "/v1/getCampaignList",
      method: "POST",
      data: inlineObject2,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 【要注意！！！】1.5 只用在TASK结果上传以及campaign上传时返回数量的时候采用，即，1.5 只有用到 campaign_statistics.winner_number及task_statistics.qualifier_number。 其他值本期置0或默认值即可。
   * @summary [要注意]查询Campaign所有参与信息
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignParticipationInfoPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse2006>({
      url: "/v1/getCampaignParticipationInfo",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取Campaign的状态信息
   * @param {InlineObject7} [inlineObject7]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignStatusInfoPost(
    inlineObject7?: InlineObject7,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20020>({
      url: "/v1/getCampaignStatusInfo",
      method: "POST",
      data: inlineObject7,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 查询Campaign下的task下拉选项
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignTaskSelectionPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse2005>({
      url: "/v1/getCampaignTaskSelection",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 查询Campaign Participant列表
   * @param {GetCampaignUserListParams} [getCampaignUserListParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignUserListPost(
    getCampaignUserListParams?: GetCampaignUserListParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse2008>({
      url: "/v1/getCampaignUserList",
      method: "POST",
      data: getCampaignUserListParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取Campaign的Winner
   * @param {InlineObject18} [inlineObject18]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCampaignWinnersPost(
    inlineObject18?: InlineObject18,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20044>({
      url: "/v1/getCampaignWinners",
      method: "POST",
      data: inlineObject18,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 取得国家列表
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCountryListPost(options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20051>({
      url: "/v1/getCountryList",
      method: "POST",

      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 查询创建的Campaign下拉选项
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCreatedCampaignSelectionPost(options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse2004>({
      url: "/v1/getCreatedCampaignSelection",
      method: "POST",

      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 按多种条件查询Campaign列表，比如查询首页置顶活动列表、查询explorer页活动列表、查询用户参与的活动列表、 查询用户创建的活动列表
   * @summary 查询Creator Campaign列表
   * @param {InlineObject13} [inlineObject13]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetCreatorCampaignListPost(
    inlineObject13?: InlineObject13,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20033>({
      url: "/v1/getCreatorCampaignList",
      method: "POST",
      data: inlineObject13,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取预定义的NFT Collection信息
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetDefaultNftListPost(options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20026>({
      url: "/v1/getDefaultNftList",
      method: "POST",

      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取预定义的Token列表
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetDefaultTokenListPost(options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20025>({
      url: "/v1/getDefaultTokenList",
      method: "POST",

      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 通过链获取预定义的NFT Collection信息
   * @param {InlineObject24} [inlineObject24]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetNftListByChainPost(
    inlineObject24?: InlineObject24,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20026>({
      url: "/v1/getNftListByChain",
      method: "POST",
      data: inlineObject24,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取指定的NFT Collection信息
   * @param {TokenAddress} [tokenAddress]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetNftMetadataPost(
    tokenAddress?: TokenAddress,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20027>({
      url: "/v1/getNftMetadata",
      method: "POST",
      data: tokenAddress,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取创建活动参数
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetSetCampaignParamsPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20022>({
      url: "/v1/getSetCampaignParams",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 查询Task用户参与列表
   * @param {GetTaskUserListParams} [getTaskUserListParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetTaskUserListPost(
    getTaskUserListParams?: GetTaskUserListParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse2009>({
      url: "/v1/getTaskUserList",
      method: "POST",
      data: getTaskUserListParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取指定的Token信息
   * @param {TokenAddress} [tokenAddress]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetTokenMetadataPost(
    tokenAddress?: TokenAddress,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20028>({
      url: "/v1/getTokenMetadata",
      method: "POST",
      data: tokenAddress,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 根据链名取得token metadata
   * @param {InlineObject23} [inlineObject23]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetTokenMetadatasByChainPost(
    inlineObject23?: InlineObject23,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20048>({
      url: "/v1/getTokenMetadatasByChain",
      method: "POST",
      data: inlineObject23,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 返回B端用户未发布的活动Id
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetUnpublishedCampaignIdPost(options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse2003>({
      url: "/v1/getUnpublishedCampaignId",
      method: "POST",

      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取需要b端用户需要上传的任务列表
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetUnuploadQualifierTasksPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20036>({
      url: "/v1/getUnuploadQualifierTasks",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取Campaign用户状态信息
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetUserCampaignStatusPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20021>({
      url: "/v1/getUserCampaignStatus",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取用户等级列表
   * @param {object} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1GetUserLevelListPost(body?: object, options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20037>({
      url: "/v1/getUserLevelList",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 修改活动权重
   * @param {InlineObject21} [inlineObject21]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1ModifyCampaignWeightPost(
    inlineObject21?: InlineObject21,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20047>({
      url: "/v1/modifyCampaignWeight",
      method: "POST",
      data: inlineObject21,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 在Campaign Draft状态下，B可以删除
   * @summary 刷新Campaign
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1RefreshCampaignInfoPost(body?: string, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/refreshCampaignInfo",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 在Campaign Draft状态下，B可以删除
   * @summary 刷新Carouse
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1RefreshCarousePost(body?: string, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/refreshCarouse",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 在Campaign Draft状态下，B可以删除
   * @summary 刷新SNS
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1RefreshSnsPost(body?: string, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/refreshSns",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 在Campaign Draft状态下，B可以删除
   * @summary 刷新User
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1RefreshUserInfoPost(body?: string, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/refreshUserInfo",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 创建或者修改Campaign
   * @param {SetCampaignParams} [setCampaignParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1SetCampaignPost(
    setCampaignParams?: SetCampaignParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20017>({
      url: "/v1/setCampaign",
      method: "POST",
      data: setCampaignParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 未完成时返回error
   * @summary 用户提交Campaign
   * @param {SubmitCampaignParams} [submitCampaignParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1SubmitCampaignPost(
    submitCampaignParams?: SubmitCampaignParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/submitCampaign",
      method: "POST",
      data: submitCampaignParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 用户提交Task
   * @param {SubmitTaskParams} [submitTaskParams]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1SubmitTaskPost(
    submitTaskParams?: SubmitTaskParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/submitTask",
      method: "POST",
      data: submitTaskParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取Task qualifier是否 已经产生
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1TaskQualifierGeneratedPost(
    body?: number,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/taskQualifierGenerated",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 测试外部api
   * @param {InlineObject26} [inlineObject26]
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1TestOutApiPost(
    inlineObject26?: InlineObject26,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20049>({
      url: "/v1/testOutApi",
      method: "POST",
      data: inlineObject26,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 上传Campaign Winner名单
   * @summary 上传Campaign Winner名单
   * @param {any} file
   * @param {number} campaignId
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1UploadCampaignWinnersPost(
    file: any,
    campaignId: number,
    options?: AxiosRequestConfig
  ) {
    const formData = new FormData();
    formData.append("file", file as any);
    formData.append("campaignId", campaignId as any);
    const { result } = await request<InlineResponse20029>({
      url: "/v1/uploadCampaignWinners",
      method: "POST",
      data: formData,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 上传Task Qualifiers 名单
   * @param {any} file
   * @param {number} taskId
   * @param {*} [options] Override http request option.
   * @memberof CampaignApi
   */
  async v1UploadTaskQualifiersPost(
    file: any,
    taskId: number,
    options?: AxiosRequestConfig
  ) {
    const formData = new FormData();
    formData.append("file", file as any);
    formData.append("taskId", taskId as any);
    const { result } = await request<InlineResponse20030>({
      url: "/v1/uploadTaskQualifiers",
      method: "POST",
      data: formData,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },
};
