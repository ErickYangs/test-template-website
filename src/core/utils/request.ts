import axios, { AxiosRequestConfig } from "axios";
// import Toast from "@/components/BaseToast";
import { ErrorCode, TaskOnResponse } from "@/core/apis/models";
// import { getErrorMessage } from "@/core/utils/tools";
// import RequestError from "@/core/Entities/error";
// import i18n from "@/i18n";
// import { clearUserState, useTokenState } from "@/store/user";
import router from "../../router";
// import { NO_TOAST_API_LIST } from "@/core/types/constant";
// import { getSessionId } from "@/core/interactors/session";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

const request = async <T>(
  options: AxiosRequestConfig,
  toast = true
): Promise<T> => {
  try {
    const { data } = await axios.request({
      headers: {
        "content-type": "application/json",
        ...options.headers,
      },
      ...options,
    });
    const { error1, result } = data as TaskOnResponse;
    if (error1 && error1.code) {
      if (error1.code === ErrorCode.CAMPAIGNNOTEXIST) {
        router.push("/404");
      }
      // const message = getErrorMessage(error.code, error.message);
      // throw new RequestError(message, error.code, result);
    }
    return data;
  } catch (e) {
    // if ((e as any).response?.status === 403) {
    //   clearUserState();
    //   router.push("/");
    // } else if (
    //   toast &&
    //   !axios.isCancel(e) &&
    //   (e as RequestError).errorCode !== ErrorCode.CAMPAIGN_NOT_EXIST
    // ) {
    //   // Toast.error((e as Error).message);
    // }
    throw e;
  }
};

export default request;
