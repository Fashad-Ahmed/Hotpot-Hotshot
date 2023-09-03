const path = window.location;
export const getReduxKey = () => {
  if (path.pathname.includes("/admin.html")) {
    return "adminRoot";
  } else if (path.pathname.includes("/mechanic.html")) {
    return "mechanicRoot";
  }
  return "userRoot";
};

export const getActorRole = () => {
  if (path.pathname.includes("/admin.html")) {
    return "admin";
  } else if (path.pathname.includes("/mechanic.html")) {
    return "mechanic";
  }
  return "user";
};

// export function kFormatter(num) {
//   return Math.abs(num) > 999
//     ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
//     : Math.sign(num) * Math.abs(num);
// }

export function kFormatter(num) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol
    : "0";
}

export const percentageCal = {
  positive: 100,
  neutral: 50,
  negative: 0,
};

export const getRedirectionUrl = (notificationData) => {
  switch (notificationData.role) {
    case "user":
      switch (notificationData.notificationType) {
        case "order":
          return (
            window.location.protocol +
            "//" +
            window.location.host +
            "/user.html#/order-detail/" +
            notificationData.entityId
          );
        case "ad":
          return (
            window.location.protocol +
            "//" +
            window.location.host +
            "/user.html#/ad-detail/" +
            notificationData.entityId
          );
        default:
          break;
      }
    case "admin":
      switch (notificationData.notificationType) {
        case "ad":
          return (
            window.location.protocol +
            "//" +
            window.location.host +
            "/admin.html#/ad-details/" +
            notificationData.entityId
          );
        default:
          break;
      }
  }
};
