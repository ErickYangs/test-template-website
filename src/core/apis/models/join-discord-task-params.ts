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

import { DiscordRole } from "./discord-role";

/**
 *
 * @export
 * @interface JoinDiscordTaskParams
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface JoinDiscordTaskParams {
  /**
   *
   * @type {string}
   * @memberof JoinDiscordTaskParams
   */
  server_id: string;
  /**
   *
   * @type {string}
   * @memberof JoinDiscordTaskParams
   */
  server_name: string;
  /**
   *
   * @type {string}
   * @memberof JoinDiscordTaskParams
   */
  discord_link: string;
  /**
   *
   * @type {string}
   * @memberof JoinDiscordTaskParams
   */
  extra?: string;
  /**
   *
   * @type {Array<DiscordRole>}
   * @memberof JoinDiscordTaskParams
   */
  roles?: Array<DiscordRole>;
}
