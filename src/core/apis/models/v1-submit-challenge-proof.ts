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
 * @interface V1SubmitChallengeProof
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface V1SubmitChallengeProof {
  /**
   *
   * @type {string}
   * @memberof V1SubmitChallengeProof
   */
  type: string;
  /**
   * `${did}#key-1`
   * @type {string}
   * @memberof V1SubmitChallengeProof
   */
  verificationMethod: string;
  /**
   *
   * @type {number}
   * @memberof V1SubmitChallengeProof
   */
  created: number;
  /**
   * 签名
   * @type {string}
   * @memberof V1SubmitChallengeProof
   */
  value: string;
}