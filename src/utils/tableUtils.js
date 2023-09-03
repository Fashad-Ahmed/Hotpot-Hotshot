import React from "react";

import calendar from "../assets/Images/automatic.png";
import Hybrid from "../assets/Images/automatic.png";
import km from "../assets/Images/automatic.png";
import automatic from "../assets/Images/automatic.png";
import car from "../assets/Images/car.png";
import pencil from "../assets/Images/pencil.png";
import palette from "../assets/Images/palette.png";
import engine from "../assets/Images/engine.png";

// --------------- LABELS -------------------
export const orderLabel = [
  "S. NO.",
  "ORDER ID",
  // "PRODUCT NAME",
  // "PRODUCT CATEGORY",
  // "SUB CATEGORY",
  "DATE",
  "ORDER STATUS",
  "ACTION",
];
export const bookingLabel = [
  "S. NO.",
  "BOOKING ID",
  "AD ID",
  // "MECHANIC NAME",
  "DATE",
  "AMOUNT ($)",
  "REQUEST STATUS",
  "ACTION",
];
export const adLabel = [
  "S. NO.",
  "AD ID",
  "CAR NAME",
  "CAR CATEGORY",
  "DATE",
  "AD STATUS",
  "ACTION",
];
export const featureAdLabel = [
  "S. NO.",
  "AD ID",
  "CAR NAME",
  "PLAN NAME",
  "DAYS",
  "EXPIRY DATE",
  "AMOUNT ($)",
];

export const adManagementLabel = [
  "S. NO.",
  "USER NAME",
  "CAR NAME",
  "REQUESTED DATE",
  "AD STATUS",
  "ACTION",
];
export const mechanicTableLabel = [
  "S. NO.",
  "NAME",
  "EMAIL",
  "DATE",
  "STATUS",
  "ACTION",
];
export const inspectionTableLabel = [
  "S. NO.",
  // "AD ID",
  "USER NAME",
  "MECHANIC NAME",
  "DATE",
  "AMOUNT ($)",
  "MECHANIC COMMISSION ($)",
  "MY COMMISSION ($)",
  "REQUEST STATUS",
  "ACTION",
];
export const categoryManagementLabel = [
  "S. NO.",
  "CATEGORY NAME",
  "STATUS",
  "ACTION",
];
export const subCategoryManagementLabel = [
  "S. NO.",
  "SUB-CATEGORY NAME",
  "CATEGORY NAME",
  "STATUS",
  "ACTION",
];
export const inventoryTableLabel = [
  "S. NO.",
  "PRODUCT NAME",
  "PRODUCT CATEGORY",
  // "SUB CATEGORY",
  "PRICE ($)",
  // "DATE",
  "STATUS",
  "ACTION",
];
export const orderManagementLabel = [
  "S. NO.",
  "ORDER ID",
  "USER NAME",
  // "PRODUCT NAME",
  // "PRODUCT CATEGORY",
  // "SUB CATEGORY",
  "DATE",
  "ORDER STATUS",
  "ACTION",
];
export const queryManagementLabel = [
  "S. NO.",
  "USER NAME",
  "SUBJECT",
  "EMAIL",
  "DATE",
  "ACTION",
];
export const featureAdPackagesLabel = [
  "S. NO.",
  "PLAN NAME",
  "DAYS",
  "PRICE ($)",
  "STATUS",
  "ACTION",
];
export const adReportManagementLabel = [
  "S. NO.",
  "USER NAME",
  // "COMMENT",
  "DATE",
  "AD ID",
  // "AD STATUS",
  "ACTION",
];
export const inspectionRequestLabel = [
  "S. NO.",
  "AD ID",
  "USER NAME",
  "INSPECTION DATE TIME",
  // "CAR NAME",
  "SERVICE",
  // "SESSION SLOT",
  "REQUEST STATUS",
  "ACTION",
];

export const tableStatusLabel = ["STATUS", "AD STATUS"];
export const tableBrandSettings = [
  "S. NO.",
  "IMAGE",
  "NAME",
  "STATUS",
  "ACTION",
];
export const tableFeaturesSettings = [
  "S. NO.",
  "ICON",
  "NAME",
  "STATUS",
  "ACTION",
];

export const tableFinancingPlans = [
  "S. NO.",
  "INTEREST RATE(%)",
  "DOWN PAYMENT(%)",
  "MONTHS",
  "STATUS",
  "ACTION",
];

export const tableEngineSettings = ["S. NO.", "NAME", "ACTION"];
export const tableTransmissionSettings = ["S. NO.", "NAME", "ACTION"];

// -------------VALUES---------------

export const orderValues = [
  {
    id: "3008",
    name: "Abc",
    category: "Car Care",
    subCategory: "Sub Category",
    date: "MM/DD/YYYY",
    status: "Inprocess",
  },
];
export const bookingValues = [
  {
    id: "3008",
    adId: "1234",
    name: "Abc",
    date: "21/12/2023",
    slot: "10 AM - 11 AM",
    amount: "$ 2000",
    status: "Upcoming ",
  },
];
export const adValues = [
  {
    id: "3008",
    name: "Abc",
    category: "Car Care",
    date: "MM/DD/YYYY",
    status: "Inprocess",
  },
];
export const adManagementValues = [
  {
    userName: "Alen",
    name: "Abc",
    category: "Car Care",
    date: "MM/DD/YYYY",
    status: "Inprocess",
  },
];
export const featureValues = [
  {
    id: "3008",
    name: "Abc",
    category: "Car Care",
    planName: "Sub Category",
    date: "MM/DD/YYYY",
    expiryDate: "MM/DD/YYYY",
    amount: "$ 2000",
  },
];

export const mechanicTableValue = [
  {
    name: "ABC",
    email: "email@email.com",
    date: "MM/DD/YYYY",
    requestStatus: "Approved",
    status: "Active",
  },
];
export const inspectionTableValues = [
  {
    id: "3008",
    name: "Abc",
    mechanicName: "XYZ",
    date: "MM/DD/YYYY",
    amount: "$ 2000",
    mechanicCommision: "% 90",
    myCommision: "$ 2000",
    status: "Active",
  },
];
export const categoryManagementValues = [
  {
    categoryName: "Car Care",
    status: "Active",
  },
];
export const subCategoryManagementValues = [
  {
    subCategoryName: "Car Top Covers",
    categoryName: "Car Care",
    status: "Active",
  },
];
export const inventoryTableValues = [
  {
    productName: "Abc",
    productCategory: "XYZ",
    subCategory: "MM/DD/YYYY",
    price: "$ 2000",
    date: "MM/DD/YYY",
    status: "Active",
  },
];
export const orderManagementValues = [
  {
    id: "3008",
    name: "Abc",
    productName: "Abc",
    category: "Car Care",
    subCategory: "Sub Category",
    date: "MM/DD/YYYY",
    status: "Inprocess",
  },
];
export const queryManagementValue = [
  {
    userName: "Abc",
    userType: "User",
    date: "MM/DD/YYYY",
  },
];
export const featureAdPackagesValues = [
  {
    planName: "Silver",
    days: "4",
    price: "$ 2000",
    status: "Active",
  },
];
export const adReportValues = [
  {
    userName: "Abc",
    date: "MM/DD/YYYY",
    adId: "3008",
  },
];
export const inspectionRequestValue = [
  {
    adId: "23",
    userName: "AbcXYZ",
    inspectionDate: "MM/DD/YYYY",
    carName: "ABC xyz",
    service: "Workshop Inspection	",
    session: "Sun 12:00 Pm - 3:00PM	",
    status: "completed",
  },
];

export const createAdValues = {
  engine: [
    { label: "Engine Oil Leakage", values: ["Leakage ", "No Leakage"] },
    { label: "Coolent Leakage", values: ["Leakage ", "No Leakage"] },
    { label: "Radiator", values: ["Ok ", "Not Ok"] },
    { label: "Suction Fan", values: ["Working", "Not Working"] },
  ],
  body_frame: [
    {
      label: "Radiator Core Support",
      values: ["Accidented ", "Not Accidented"],
    },
    {
      label: "Cowl Panel Firewall",
      values: ["Accidented ", "Not Accidented"],
    },
  ],
  mechanicalCheck: [
    { label: "Belts (Fan0)", values: ["Ok ", "Not Ok"] },
    { label: "Coolent Leakage", values: ["Leakage ", "No Leakage"] },
  ],
  brakes: [
    { label: "Front Rigth Disc", values: ["Smooth", "Not Smooth"] },
    { label: "Front Left Disc", values: ["Smooth", "Not Smooth"] },
  ],
  interior: [
    { label: "Horn", values: ["Working", "Not Working"] },
    { label: "Wiper", values: ["Working", "Not Working"] },
    { label: "Right Side Miror", values: ["Working", "Not Working"] },
    { label: "Left Side Miror", values: ["Working", "Not Working"] },
  ],
  ac: [
    { label: "Blower", values: ["Exellet Air Throw", "Bad Air Throw"] },
    { label: "Ac Optional", values: ["Yes", "No"] },
  ],
  electronics: [
    { label: "Battery Warning Light", values: ["Not Present", "Present"] },
    { label: "Air Bag Warning Light", values: ["Not Present", "Present"] },
  ],
  exterior: [
    { label: "Turn Lock", values: ["Smooth", "Not Smooth"] },
    { label: "Sun Roof Glass", values: ["No", "Yes"] },
  ],
  tyres: [
    { label: "Rims", values: ["Alloy", "Not Alloy"] },
    { label: "Wheel Caps", values: ["Present", "Not Present"] },
  ],
};

export const icons = {
  calendar: calendar,
  Hybrid: Hybrid,
  km: km,
  automatic: automatic,
  car: car,
  pencil: pencil,
  palette: palette,
  engine: engine,
};

// Dymanic Table Values

export const tableValuesAdmin = {
  category: [
    {
      key: "",
    },
    {
      key: "name",
    },
    {
      key: "status",
    },
  ],

  orderLogs: [
    {
      key: "",
    },
    {
      key: "_id",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],

  orderManagement: [
    {
      key: "",
    },
    {
      key: "_id",
    },
    {
      key: "user",
      subKey: "firstName",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],

  featuredAdsLogs: [
    {
      key: "",
    },
    {
      key: "id",
    },
    {
      key: "name",
    },
    {
      key: "category",
      subKey: "name",
    },
    {
      key: "package",
      subKey: "packageId",
    },
    {
      key: "package",
      subKey: "days",
    },
    {
      key: "package",
      subKey: "expiresAt",
    },
    {
      key: "price",
    },
  ],

  bookingLogs: [
    {
      key: "",
    },
    {
      key: "_id",
    },
    {
      key: "ad",
      subKey: "_id",
    },
    // {
    //   key: "mechanic",
    //   subKey: "firstName",
    // },
    {
      key: "dateTime",
    },

    {
      key: "ad",
      subKey: "price",
    },
  ],

  bookingLogsIndividual: [
    {
      key: "",
    },
    {
      key: "_id",
    },
    {
      key: "ad",
    },
    {
      key: "createdAt",
    },
    {
      key: "amount",
    },
  ],

  inventory_categories: [
    {
      key: "",
    },
    {
      key: "name",
    },
    {
      key: "status",
    },
  ],
  inventory_sub_categories: [
    {
      key: "",
    },
    {
      key: "name",
    },
    {
      key: "parent",
      subKey: "name",
    },
    {
      key: "status",
    },
  ],

  products: [
    {
      key: "",
    },
    {
      key: "name",
    },
    {
      key: "category",
      subKey: "name",
    },
    // {
    //   key: "sub-category",
    // },
    {
      key: "price",
    },
    {
      key: "status",
    },
  ],
  ads: [
    {
      key: "",
    },
    {
      key: "user",
      subKey: "firstName",
    },
    {
      key: "name",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],

  adsReports: [
    {
      key: "",
    },
    {
      key: "user",
      subKey: "firstName",
    },
    {
      key: "createdAt",
    },
    {
      key: "ad",
    },
  ],
  userAds: [
    {
      key: "",
    },
    {
      key: "_id",
    },
    {
      key: "name",
    },
    {
      key: "category",
      subKey: "name",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],
  users: [
    {
      key: "",
    },
    {
      key: "firstName",
    },
    {
      key: "email",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],

  queries: [
    {
      key: "",
    },
    {
      key: "firstName",
    },
    {
      key: "subject",
    },
    {
      key: "email",
    },
    {
      key: "createdAt",
    },
  ],

  featuredAds: [
    {
      key: "",
    },
    {
      key: "name",
    },
    {
      key: "days",
    },
    {
      key: "price",
    },
    {
      key: "status",
    },
  ],
  mechanics: [
    {
      key: "",
    },
    {
      key: "firstName",
    },
    {
      key: "email",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],
  isnpectionRequest: [
    {
      key: "",
    },
    {
      key: "ad",
      subKey: "_id",
    },
    {
      key: "user",
      subKey: "firstName",
    },
    {
      key: "dateTime",
    },

    {
      key: "service",
    },
    {
      key: "status",
    },
  ],
  inspectionReportList: [
    { key: "" },
    // { key: "_id" },
    {
      key: "user",
      subKey: "firstName",
    },
    { key: "mechanic", subKey: "firstName" },
    { key: "dateTime" },
    { key: "amount" },
    { key: "mechanicCommission" },
    { key: "adminCommission" },
    { key: "status" },
  ],
  settingsBrand: [
    { key: "" },
    { key: "image", subKey: "thumbnailPath" },
    { key: "name" },
    { key: "status" },
  ],
  settingsFeatures: [
    { key: "" },
    { key: "image", subKey: "thumbnailPath" },
    { key: "name" },
    { key: "status" },
  ],
  settingsEngineType: [{ key: "" }, { key: "name" }],
  financePlans: [
    {
      key: "",
    },
    {
      key: "interestRate",
    },
    {
      key: "downPaymentRate",
    },
    {
      key: "months",
    },
    {
      key: "status",
    },
  ],
  bookingLogs: [
    {
      key: "",
    },
    {
      key: "",
    },
    {
      key: "",
    },
    {
      key: "",
    },
  ],
  subscriptionLogs: [
    {
      key: "",
    },
    {
      key: "ad",
      subKey: "_id",
    },
    {
      key: "ad",
      subKey: "name",
    },
    {
      key: "name",
    },
    {
      key: "days",
    },
    {
      key: "expiresAt",
    },
    {
      key: "price",
    },
  ],
  shoppingLogs: [
    {
      key: "",
    },
    {
      key: "entityId",
    },
    {
      key: "createdAt",
    },
    {
      key: "status",
    },
  ],
  settingsTransmission: [{ key: "" }, { key: "name" }],
  newsLetters: [{ key: "" }, { key: "subject" }, { key: "createdAt" }],
};
