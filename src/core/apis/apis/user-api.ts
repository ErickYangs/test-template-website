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
  BindAddressParams,
  BindSnsParams,
  GetNotificationParams,
  InlineObject,
  InlineObject12,
  InlineObject14,
  InlineObject25,
  InlineResponse200,
  InlineResponse20014,
  InlineResponse20016,
  InlineResponse20034,
  InlineResponse20050,
  SetBUserInfoByAdminParams,
  TaskOnResponse,
  UnbindAddressParams,
  UnbindSnsParams,
} from "../models";

/**
 * UserApi -
 * @export
 */
export const UserApi = {
  /**
   *
   * @summary B端账户绑定推特
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1BUserBindTwitterPost(body?: string, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/bUserBindTwitter",
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
   * @summary 绑定地址
   * @param {BindAddressParams} [bindAddressParams]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1BindAddressPost(
    bindAddressParams?: BindAddressParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/bindAddress",
      method: "POST",
      data: bindAddressParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 绑定社媒账户
   * @param {BindSnsParams} [bindSnsParams]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1BindSNSPost(
    bindSnsParams?: BindSnsParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/bindSNS",
      method: "POST",
      data: bindSnsParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 当前用于插件
   * @summary 获取用户余额
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1GetUserBalancePost(body?: number, options?: AxiosRequestConfig) {
    const { result } = await request<InlineResponse20014>({
      url: "/v1/getUserBalance",
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
   * 正常返回绑定该twitter的b或c账号信息，如果twitter handle不存在error 为HANDLE_NOT_EXIST， 如果twitter handle 对应的账号不存在则error为HANDLE_ACCOUNT_NOT_EXIST。
   * @summary 通过twitter查询用户信息
   * @param {InlineObject25} [inlineObject25]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1GetUserInfoByTwitterPost(
    inlineObject25?: InlineObject25,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse200>({
      url: "/v1/getUserInfoByTwitter",
      method: "POST",
      data: inlineObject25,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 如果查不到，会返回OBJECT_NOT_FOUND 的错误
   * @summary 查询用户信息
   * @param {InlineObject} [inlineObject]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1GetUserInfoPost(
    inlineObject?: InlineObject,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse200>({
      url: "/v1/getUserInfo",
      method: "POST",
      data: inlineObject,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 用于插件
   * @summary 获取用户通知消息
   * @param {GetNotificationParams} [getNotificationParams]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1GetUserNotificationPost(
    getNotificationParams?: GetNotificationParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20016>({
      url: "/v1/getUserNotification",
      method: "POST",
      data: getNotificationParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 发送邮箱验证码
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1RequestEmailVerifyCodePost(
    body?: string,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/requestEmailVerifyCode",
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
   * @summary 管理员设置B端用户信息
   * @param {SetBUserInfoByAdminParams} [setBUserInfoByAdminParams]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1SetBUserInfoByAdminPost(
    setBUserInfoByAdminParams?: SetBUserInfoByAdminParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20050>({
      url: "/v1/setBUserInfoByAdmin",
      method: "POST",
      data: setBUserInfoByAdminParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * 用于插件
   * @summary 用户通知设置为已读
   * @param {number} [body]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1SetNotificationReadPost(body?: number, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/setNotificationRead",
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
   * @summary 解绑地址
   * @param {UnbindAddressParams} [unbindAddressParams]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1UnbindAddressPost(
    unbindAddressParams?: UnbindAddressParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/unbindAddress",
      method: "POST",
      data: unbindAddressParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 解绑社媒账户
   * @param {UnbindSnsParams} [unbindSnsParams]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1UnbindSNSPost(
    unbindSnsParams?: UnbindSnsParams,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/unbindSNS",
      method: "POST",
      data: unbindSnsParams,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 编辑用户信息
   * @param {InlineObject12} [inlineObject12]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1UpdateUserInfoPost(
    inlineObject12?: InlineObject12,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/updateUserInfo",
      method: "POST",
      data: inlineObject12,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   *
   * @summary 查询用户名是否已经存在
   * @param {InlineObject14} [inlineObject14]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1UserNameExistPost(
    inlineObject14?: InlineObject14,
    options?: AxiosRequestConfig
  ) {
    const { result } = await request<InlineResponse20034>({
      url: "/v1/userNameExist",
      method: "POST",
      data: inlineObject14,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },

  /**
   * request body为oauth token,非必填，如果存在这个字段，验证通过要自动绑定twitter，不通过就不绑定，没传token就是用现在绑定的twitter验证。返回false的时候，会返回error。
   * @summary B端用户认证
   * @param {string} [body]
   * @param {*} [options] Override http request option.
   * @memberof UserApi
   */
  async v1VerifyBSideUserPost(body?: string, options?: AxiosRequestConfig) {
    const { result } = await request<TaskOnResponse>({
      url: "/v1/verifyBSideUser",
      method: "POST",
      data: body,
      ...options,
    });
    if (typeof result === "undefined") {
      throw new Error("unexpected: result should exist when no error");
    }
    return result;
  },
};