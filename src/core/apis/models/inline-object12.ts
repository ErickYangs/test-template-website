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
 *
 * @export
 * @interface InlineObject12
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface InlineObject12 {
  /**
   * 不填时不更新
   * @type {string}
   * @memberof InlineObject12
   */
  user_name?: string;
  /**
   * 不填时不更新，空字符串时表示删除头像
   * @type {string}
   * @memberof InlineObject12
   */
  avatar?: string;
  /**
   * 是否需要认证B端用户
   * @type {boolean}
   * @memberof InlineObject12
   */
  verify_b_user: boolean;
}
