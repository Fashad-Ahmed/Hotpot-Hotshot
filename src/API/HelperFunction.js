import { getActorRole, getReduxKey } from "../Utility/index";
import { NotificationManager } from "react-notifications";

const __DEV__ = true;

const TAG = "__API__";

export const LOG = (label, data) => {
  if (__DEV__) {
    // Your LOG logic here
  }
};

export const showSuccessToast = (msg) => {
  if (msg) {
    presentToast("success", getMessage(msg));
  }
};

// Rest of your code...

export const showInfoToast = (msg, title = "Info", cb, timeout) => {
  console.log("showInfoToast");
  if (msg) {
    presentToast("info", getMessage(msg), title, cb);
  }
};
export const showErrorToast = (msg) => {
  if (msg) {
    presentToast("error", getMessage(msg));
  }
};
export const showWarningToast = (msg) => {
  if (msg) {
    presentToast("warning", getMessage(msg));
  }
};

export const showGlobalToast = (msg) => {};
export const presentToast = (type, message, title, cb) => {
  switch (type) {
    case "info":
      NotificationManager.info(message, title, 40000, cb);
      break;
    case "success":
      NotificationManager.success(message, "Success", 3000);
      break;
    case "warning":
      NotificationManager.warning(message, "Warning", 3000);
      break;
    case "error":
      NotificationManager.error(message, "Error", 3000);
      break;

    default:
  }
};
export const handleResponse = ({ response, jsonResponse }) => {
  switch (response.status) {
    case 200:
    case 201: {
      if (
        jsonResponse.hasOwnProperty("errors") ||
        jsonResponse.hasOwnProperty("error")
      ) {
        if (jsonResponse.error != false) {
          const message = getMessage(jsonResponse);
          return Promise.reject(message);
        } else {
          return Promise.resolve(jsonResponse);
        }
      } else {
        return Promise.resolve(jsonResponse);
      }
      break;
    }
    // case 401: //! logout user
    case 403: {
      window.dispatchEvent(new Event("logout"));
      return;
    }
    case 405: {
      if (jsonResponse?.error?.email) {
        const message = getMessage(jsonResponse?.error?.email);
        return Promise.reject(message);
      } else {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      }
    }
    case 500: {
      if (jsonResponse?.error?.code) {
        const message = getMessage(jsonResponse?.error?.code);
        return Promise.reject(message);
      } else {
        const message = getMessage(jsonResponse);
        return Promise.reject(message);
      }
    }
    default: {
      const message = getMessage(jsonResponse);
      return Promise.reject(message);
    }
  }
};
export const performNetworkRequest = async (url, configs) => {
  url = encodeURI(url);
  try {
    const response = await fetch(url, configs);

    const jsonResponse = await response.json();
    return Promise.resolve({ response, jsonResponse });
  } catch (e) {
    log("error", e);
    return Promise.reject(e);
  }
};
export const log = (label, data) => {
  if (__DEV__) {
    // //console.log(TAG + `__${label}__ :`, data);
  }
};
export const message = "Something went wrong";
export const getMessage = (json) => {
  //console.log('getMessage : ', json);
  switch (typeof json) {
    case "string": {
      return json;
    }
    case "object": {
      if (Array.isArray(json)) {
        var data = json[0];
        return getMessage(data);
      } else {
        if (json.errors) {
          const data = json.errors;
          if (typeof data === "object") {
            const values = Object.values(data);
            return getMessage(values);
          } else {
            return getMessage(data);
          }
        } else {
          if (json.message) {
            return getMessage(json.message);
          } else if (json.error) {
            return getMessage(json.error);
          } else {
            return message;
          }
        }
      }
    }
    default: {
      return message;
    }
  }
};

export const jsonToFormdata = (data) => {
  var form_data = new FormData();

  for (var key in data) {
    if (Array.isArray(data[key])) {
      var i = 0;

      var datakey = data[key];

      for (var newkey in datakey) {
        if (datakey[newkey].name) {
          form_data.append(key + `[${i}][name]`, datakey[newkey].name);

          i++;
        } else {
          form_data.append(key + `[${i}]`, datakey[newkey]);

          i++;
        }
      }
    } else if (typeof data[key] == "object") {
      form_data.append(key, data[key]);
    } else {
      form_data.append(key, data[key]);
    }
  }

  return form_data;
};

export const getConfigs = (method, body, formData = true) => {
  var headers = {
    Accept: "application/json",
  };

  if (formData !== true) {
    headers["Content-Type"] = "application/json";
  }

  const actorName = getReduxKey();
  var session = null;

  if (localStorage.getItem(`persist:storage-auth-${actorName}`) != null) {
    session = JSON.parse(
      localStorage.getItem(`persist:storage-auth-${actorName}`)
    );
    if (session) {
      if (session?.token) {
        if (JSON.parse(session?.token)) {
          headers["Authorization"] = "Bearer " + JSON.parse(session?.token);
        }
      }
    }
  }
  var configs = {
    method: method,
    headers: headers,
  };
  if (body) {
    if (method == "POST" || method == "PUT") {
      if (formData == true) {
        configs["body"] = jsonToFormdata(body);
      } else {
        configs["body"] = JSON.stringify(body);
      }
    }
  }
  // console.log(configs.body, "helloConfigs");
  return configs;
};
export const dataToQueryParameter = (data) => {
  if (typeof data === "object") {
    if (!Array.isArray(data)) {
      var params = "?";
      const dataArray = Object.entries(data);
      if (dataArray.length > 0) {
        dataArray.forEach((entry, index) => {
          const [key, value] = entry;
          if (typeof value === "object") {
            Object.entries(value).forEach((nestedEntry) => {
              console.log("entries");
              const [nestedKey, nestedValue] = nestedEntry; // var amp = index < dataArray.length - 1 ? '&' : '';
              params = `${params}&${key}[${nestedKey}]=${nestedValue}`;
            });
          } else {
            params = `${params}&${entry[0]}=${entry[1]}`;
          }
        });
        return params;
      }
    }
  } else if (typeof data === "string") {
    return data;
  }
  return "";
};
