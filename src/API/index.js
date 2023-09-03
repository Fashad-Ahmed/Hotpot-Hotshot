// minlength: 4; maxlength: 4; required: digit; // sms verification rule
import {
  dataToQueryParameter,
  getConfigs,
  getMessage,
  handleResponse,
  performNetworkRequest,
  showErrorToast,
} from "./HelperFunction";
import { base_url } from "./config";

export const post = async (endpoint, body, formData, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  console.log(url, "the url is here");
  console.log("hit: ", endpoint, " Body: ", body);
  const configs = getConfigs("POST", body, formData);
  console.log("log configs", configs);
  try {
    const networkResult = await performNetworkRequest(url, configs);

    // console.log('log networkResult', networkResult);
    const result = await handleResponse(networkResult);
    // console.log('log  result', result);
    return Promise.resolve(result);
  } catch (e) {
    //// console.log('e == ', e);
    const message = getMessage(e);
    // console.log("In helper index, the respone is", e)

    return Promise.reject(message);
  }
};

export const get = async (endpoint, queryParams) => {
  const url = base_url + endpoint + dataToQueryParameter(queryParams);
  console.log(url, "urlurlurlurlurlurlurlurlurlurlurlurl");
  const configs = getConfigs("GET");
  try {
    const networkResult = await performNetworkRequest(url, configs);
    const result = await handleResponse(networkResult);

    return Promise.resolve(result);
  } catch (e) {
    const message = getMessage(e);
    return Promise.reject(message);
  }
};

const Api = {
  post: post,
  get: get,
};
export default Api;
