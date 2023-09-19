export const url = "https://mobileapps.onlinetestingserver.com:16001/";
// export const url = "http://10.2.1.107:16001/";
// export const url = "http://10.2.0.227:16001/";

export const mapApiKey = "AIzaSyCL2XFs2hqb_aQFKtcUVf9xyhdxLBSFdp0";

export const base_url = `${url}apis/`;

export const exndpoints = {
  auth: {
    login: "user/login",
    signup: "user/register",
    sendEmail: "user/forgotPassword/request",
    verifyOtpCode: "user/forgotPassword/verifyCode",
    setPassword: "user/forgotPassword/changePassword",
    getUser: "user",
    updatePassword: "user/updatePassword",
    updateProfile: "user/edit",
    uploadImage: "upload/user",
    createMechanic: "user/createMechanicProfile",
    updateMechanic: "user/edit/mechanicProfile",
    queries: "user/queries",
    queriesDetails: "user/queries/",
    logout: "user/logout",
    paymentLogs: "user/payment/logs/",
    featuredAdLogs: "ads/subscription/",
  },
  ads: {
    ads: "ads",
    editAd: "ads/edit/",
    getCategories: "settings/category",
    addCategores: "settings/category/create",
    getCategoryId: "settings/category/",
    editCategories: "settings/category/edit/",
    uploadDocument: "upload/document",
    submitTestDrive: "ads/testDrive/create",
    getTestDriveList: "ads/testDrive/",
    getInspectionReport: "ads/inspection/report",
    inspectionRequest: "ads/inspection/request",
    similarAds: "ads/similar/",
    featurePackages: "ads/packages",
    createFeaturedPackage: "ads/packages/create",
    updateFeaturedPcakge: "ads/packages/edit",
    subscribeFeature: "ads/packages/subscribe",
    createReport: "ads/inspection/report/create",
    savedAds: "ads/saved",
    toggleSaveAd: "ads/saved/toggle/",
    findMechanic: "ads/mechanic/find",
    getAvailableMechanics: "ads/mechanic/getAvailable",
    adReport: "ads/report/",
    getAdsReports: "ads/report",
    getAdReportDetails: "ads/report",
  },
  settings: {
    getSettings: "settings",
    getComission: "settings/commission/",
    getTax: "settings/tax/",
    getDeliveryChargesData: "settings/deliveryCharges/",
    getBrands: "settings/brand",
    createBrand: "settings/brand/create",
    updateBrand: "settings/brand/edit",
    getFeatures: "settings/feature",
    createFeature: "settings/feature/create",
    updateFeature: "settings/feature/edit",
    createDeliveryCharges: "settings/deliveryCharges/create",
    taxesCharges: "settings/tax/create",
    comission: "settings/commission/create",
    updateComission: "settings/comission/edit",
    updateDeliveryCharges: "settings/deliveryCharges/edit",
    createTaxes: "settings/taxes/create",
    updateTaxes: "settings/taxes/edit",
    getNotifications: "user/notifications",
    getUnreadNotifications: "user/notifications/unread",
    createPlans: "settings/finance/create",
    getPlans: "settings/finance",
    updatePlans: "settings/finance/edit/",
    getCounts: "cms/counts",
  },
  user: {
    user: "user/all",
    userStatus: "user/edit/status",
    contactUs: "user/contactUs",
  },
  shop: {
    products: "shop/products/",
    categories: "shop/category",
    createCategory: "shop/category/create",
    updateCategory: "shop/category/edit",
    createProduct: "shop/products/create",
    updateProduct: "shop/products/edit",
    removeFromCart: "shop/cart/remove",
    addToCart: "shop/cart/add",
    getCart: "shop/cart",
    getOrders: "shop/orders/",
    editOrdersEdit: "shop/orders/edit/",
    createOrder: "shop/orders/checkout",
    getProductReviews: "shop/product/reviews",
    createReview: "shop/orders/product/review/create",
    toggleSaveProduct: "shop/wishlist/toggle/",
    savedProducts: "shop/wishlist/",
  },
  content: {
    aboutUs: "cms/aboutUs/",
    privacyPolicy: "cms/privacyPolicy/",
    termsCondition: "cms/termsAndConditions/",
    count: "cms/counts/",
    home: "cms/homeContent/",
    siteContent: "cms/siteContent/",
    featureAd: "cms/feature/",

    editAboutUs: "cms/aboutUs/update",
    editPrivacyPolicy: "cms/privacyPolicy/update",
    editTermsCondition: "cms/termsAndConditions/update",
    editHome: "cms/homeContent/update",
    editSiteContent: "cms/siteContent/update",
    editFeatureAd: "cms/feature/update",

    subscribeNewsLetter: "newsLetters/subscriber/create",
    sendNewsLetter: "newsLetters/send",
    getNewsLetter: "newsLetters/all",
  },
  general: {
    subscribe: "newsLetters/subscriber/create",
  },
};
