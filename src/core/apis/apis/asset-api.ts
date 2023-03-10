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
  GetTokenTxDetailParams,
  GetUserNftBalanceParams,
  GetUserTokenBalanceParams,
  InlineObject27,
  InlineObject28,
  InlineObject29,
  InlineObject30,
  InlineObject31,
  InlineObject32,
  InlineResponse20053,
  InlineResponse20054,
  InlineResponse20055,
  InlineResponse20056,
  InlineResponse20057,
  InlineResponse20058,
  InlineResponse20059,
  InlineResponse20060,
  InlineResponse20061,
  InlineResponse20062,
  InlineResponse20063,
  NftWithdrawParams,
  TokenWithdrawParams,
} from "../models";

/**
 * AssetApi -
 * @export
 */
export const AssetApi = {
  /**
   *
   * @summary 获取锁定的Nft列表
   * @param {InlineObject32} [inlineObject32]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetLockedNftListPost(
    inlineObject32?: InlineObject32,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20063>({
      url: "/v1/getLockedNftList",
      method: "POST",
      data: inlineObject32,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取锁定的Token列表
   * @param {InlineObject31} [inlineObject31]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetLockedTokenListPost(
    inlineObject31?: InlineObject31,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20062>({
      url: "/v1/getLockedTokenList",
      method: "POST",
      data: inlineObject31,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取nftcollection的tokenId余额列表
   * @param {InlineObject30} [inlineObject30]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetNftTokenIdListPost(
    inlineObject30?: InlineObject30,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20059>({
      url: "/v1/getNftTokenIdList",
      method: "POST",
      data: inlineObject30,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取Token交易详情
   * @param {GetTokenTxDetailParams} [getTokenTxDetailParams]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetTokenTxDetailPost(
    getTokenTxDetailParams?: GetTokenTxDetailParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20060>({
      url: "/v1/getTokenTxDetail",
      method: "POST",
      data: getTokenTxDetailParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取用户Nft余额
   * @param {GetUserNftBalanceParams} [getUserNftBalanceParams]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetUserNftBalanceListPost(
    getUserNftBalanceParams?: GetUserNftBalanceParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20058>({
      url: "/v1/getUserNftBalanceList",
      method: "POST",
      data: getUserNftBalanceParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取用户nft资产列表
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetUserNftCollectionListPost(options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20054>({
      url: "/v1/getUserNftCollectionList",
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
   * @summary 获取用户Nft交易记录
   * @param {InlineObject29} [inlineObject29]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetUserNftTxHistoryListPost(
    inlineObject29?: InlineObject29,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20056>({
      url: "/v1/getUserNftTxHistoryList",
      method: "POST",
      data: inlineObject29,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary  获取用户token余额
   * @param {GetUserTokenBalanceParams} [getUserTokenBalanceParams]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetUserTokenBalanceListPost(
    getUserTokenBalanceParams?: GetUserTokenBalanceParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20057>({
      url: "/v1/getUserTokenBalanceList",
      method: "POST",
      data: getUserTokenBalanceParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取用户token资产列表
   * @param {InlineObject27} [inlineObject27]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetUserTokenListPost(
    inlineObject27?: InlineObject27,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20053>({
      url: "/v1/getUserTokenList",
      method: "POST",
      data: inlineObject27,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 获取用户token交易记录
   * @param {InlineObject28} [inlineObject28]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1GetUserTokenTxHistoryListPost(
    inlineObject28?: InlineObject28,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20055>({
      url: "/v1/getUserTokenTxHistoryList",
      method: "POST",
      data: inlineObject28,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary nft提现
   * @param {NftWithdrawParams} [nftWithdrawParams]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1NftWithdrawPost(
    nftWithdrawParams?: NftWithdrawParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20061>({
      url: "/v1/nftWithdraw",
      method: "POST",
      data: nftWithdrawParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary token提现
   * @param {TokenWithdrawParams} [tokenWithdrawParams]
   * @param {*} [options] Override http request option.
   * @memberof AssetApi
   */
  async v1TokenWithdrawPost(
    tokenWithdrawParams?: TokenWithdrawParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20061>({
      url: "/v1/tokenWithdraw",
      method: "POST",
      data: tokenWithdrawParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },
};
