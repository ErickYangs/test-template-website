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

import { V1SubmitChallengeProof } from "./v1-submit-challenge-proof";

/**
 *
 * @export
 * @interface AuthResponse
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthResponse {
  /**
   *
   * @type {string}
   * @memberof AuthResponse
   */
  ver: string;
  /**
   *
   * @type {string}
   * @memberof AuthResponse
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof AuthResponse
   */
  nonce: string;
  /**
   *
   * @type {string}
   * @memberof AuthResponse
   */
  did: string;
  /**
   *
   * @type {V1SubmitChallengeProof}
   * @memberof AuthResponse
   */
  proof: V1SubmitChallengeProof;
  /**
   * 空数组
   * @type {Array<string>}
   * @memberof AuthResponse
   */
  VPs: Array<string>;
}
