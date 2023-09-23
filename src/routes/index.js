import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Footer from "./../components/Footer";
import Loader from "./../components/Loader";
import Subscribe from "../components/Subscribe";
import Topbar from "../components/Topbar";

const About = lazy(() => import("../views/About"));
const Blog = lazy(() => import("../views/Blog"));
const BoxTruck = lazy(() => import("../views/BoxTruck"));
const BoxTruckForm = lazy(() => import("../views/ShortForms/26BoxTruck"));
const CarriersAapp = lazy(() => import("../views/CarriersAapp"));
const CdlNon = lazy(() => import("../views/CdlNon"));
const CDLSchool = lazy(() => import("../views/CDLSchool"));
const ELD = lazy(() => import("../views/ELD"));
const GeneralFreight = lazy(() => import("../views/GeneralFreight"));
const GeneralFreightForm = lazy(() =>
  import("../views/ShortForms/GeneralFreight")
);
const HHGuide = lazy(() => import("../views/HHGuide"));
const Insurance = lazy(() => import("../views/Insurance"));
const JunkHaul = lazy(() => import("../views/JunkHaul"));
const JunkHaulForm = lazy(() => import("../views/ShortForms/JunkHaulOff"));
const MotorVehicle = lazy(() => import("../views/MotorVehicle"));
const MotorVehicleForm = lazy(() =>
  import("../views/ShortForms/MotorVehicles")
);
const Roadside = lazy(() => import("../views/Roadside"));
const TrackingTech = lazy(() => import("../views/TrackingTech"));
const Under2k = lazy(() => import("../views/Under2k"));
const Under2kForm = lazy(() => import("../views/ShortForms/LessThen2k"));
const Usdot = lazy(() => import("../views/Usdot"));
const Vetting = lazy(() => import("../views/Vetting"));
const WeightMatters = lazy(() => import("../views/WeightMatters"));
const Contact = lazy(() => import("../views/Contact"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const FAQ = lazy(() => import("../views/FAQ"));
const Help = lazy(() => import("../views/Help"));
const Home = lazy(() => import("../views/Home"));
// Admin Routes
const AdminDashboard = lazy(() => import("../views/Admin/AdminDashboard"));
const UserManagement = lazy(() => import("../views/Admin/UserManagement"));
const UserDetails = lazy(() => import("../views/Admin/UserDetails"));
const OrderDetails = lazy(() => import("../views/Admin/OrderDetails")); //
const BookingDetails = lazy(() => import("../views/Admin/BookingDetails"));
const AdDetails = lazy(() => import("../views/Admin/AdDetails"));
const FeaturedAdDetails = lazy(() =>
  import("../views/Admin/FeaturedAdDetails")
);
const InspectionReport = lazy(() => import("../views/Admin/InspectionReport"));
const CarCategories = lazy(() => import("../views/Admin/CarCategories"));
const SubCategories = lazy(() => import("../views/Admin/SubCategories"));
const MechanicsManagement = lazy(() =>
  import("../views/Admin/MechanicsManagement")
);
const InspectionManagement = lazy(() =>
  import("../views/Admin/InspectionManagement")
);
const PaymentLogs = lazy(() => import("../views/Admin/PaymentLogs"));
const InventoryManagement = lazy(() =>
  import("../views/Admin/InventoryManagement")
);
const OrderManagement = lazy(() => import("../views/Admin/OrderManagement"));
const QueriesManagement = lazy(() =>
  import("../views/Admin/QueriesManagement")
);
const FeatureAdPackages = lazy(() =>
  import("../views/Admin/FeatureAdPackages")
);
const AdsReportManagement = lazy(() =>
  import("../views/Admin/AdsReportManagement")
);
const NewsLetters = lazy(() => import("../views/Admin/NewsLetters"));
const WebContents = lazy(() => import("../views/Admin/WebContents"));
const Settings = lazy(() => import("../views/Admin/Settings"));
const Profile = lazy(() => import("../views/Profile"));
//Auth
const SignUp = lazy(() => import("../views/Auth/SignUp"));

//JunkHaul
const JunkHaulDashboard = lazy(() => import("../views/JunkHaulDir/Dashboard"));
const JunkHaulShipment = lazy(() => import("../views/JunkHaulDir/Shipments"));
const JunkHaulSummary = lazy(() => import("../views/JunkHaulDir/Summary"));
const JunkHaulTracking = lazy(() => import("../views/JunkHaulDir/Tracking"));
const JOne = lazy(() => import("../views/JunkHaulDir/One"));
const JTwo = lazy(() => import("../views/JunkHaulDir/Two"));
const JThree = lazy(() => import("../views/JunkHaulDir/Three"));
const JFour = lazy(() => import("../views/JunkHaulDir/Four"));
const JFive = lazy(() => import("../views/JunkHaulDir/Five"));
const JSix = lazy(() => import("../views/JunkHaulDir/Six"));
const JSeven = lazy(() => import("../views/JunkHaulDir/Seven"));

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" exact element={<Navigate to="/" replace />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Profile" exact element={<Profile />} />
          <Route path="/Blog" exact element={<Blog />} />
          <Route path="/BoxTruck" exact element={<BoxTruck />} />
          <Route path="/BoxTruckForm" exact element={<BoxTruckForm />} />
          <Route path="/CarriersApp" exact element={<CarriersAapp />} />
          <Route path="/CdlNon" exact element={<CdlNon />} />
          <Route path="/CDLSchool" exact element={<CDLSchool />} />
          <Route path="/ELD" exact element={<ELD />} />
          <Route path="/GeneralFreight" exact element={<GeneralFreight />} />
          <Route
            path="/GeneralFreightForm"
            exact
            element={<GeneralFreightForm />}
          />
          <Route path="/HHGuide" exact element={<HHGuide />} />
          <Route path="/Insurance" exact element={<Insurance />} />
          <Route path="/JunkHaul" exact element={<JunkHaul />} />
          <Route
            path="/JunkHaulDashboard"
            exact
            element={<JunkHaulDashboard />}
          />
          <Route
            path="/JunkHaulShipment"
            exact
            element={<JunkHaulShipment />}
          />
          <Route
            path="/JunkHaulTracking"
            exact
            element={<JunkHaulTracking />}
          />
          <Route path="/JOne" exact element={<JOne />} />
          <Route path="/JTwo" exact element={<JTwo />} />{" "}
          <Route path="/JThree" exact element={<JThree />} />
          <Route path="/JFour" exact element={<JFour />} />
          <Route path="/JFive" exact element={<JFive />} />
          <Route path="/JSix" exact element={<JSix />} />
          <Route path="/JSeven" exact element={<JSeven />} />
          <Route path="/Summary" exact element={<JunkHaulSummary />} />
          <Route path="/JunkHaulForm" exact element={<JunkHaulForm />} />
          <Route path="/MotorVehicle" exact element={<MotorVehicle />} />
          <Route path="MotorVehicleForm" exact element={<MotorVehicleForm />} />
          <Route path="/Roadside" exact element={<Roadside />} />
          <Route path="/TrackingTech" exact element={<TrackingTech />} />
          <Route path="/Under2k" exact element={<Under2k />} />
          <Route path="/Under2kForm" exact element={<Under2kForm />} />
          <Route path="/Usdot" exact element={<Usdot />} />
          <Route path="/Vetting" exact element={<Vetting />} />
          <Route path="/WeightMatters" exact element={<WeightMatters />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/FAQ" exact element={<FAQ />} />
          <Route path="/Help" exact element={<Help />} />
          {/* admin routes */}
          <Route
            path="/Admin/AdminDashboard"
            exact
            element={<AdminDashboard />}
          />
          <Route
            path="/Admin/UserManagement"
            exact
            element={<UserManagement />}
          />
          <Route path="/Admin/UserDetails" exact element={<UserDetails />} />
          <Route
            path="/Admin/OrderDetails/:id"
            exact
            element={<OrderDetails />}
          />
          <Route
            path="/Admin/BookingDetails"
            exact
            element={<BookingDetails />}
          />
          <Route
            path="/Admin/BookingDetails"
            exact
            element={<BookingDetails />}
          />
          <Route path="/Admin/ad-management" exact element={<AdDetails />} />
          <Route
            path="/Admin/FeaturedAdDetails"
            exact
            element={<FeaturedAdDetails />}
          />
          <Route
            path="/Admin/InspectionReport"
            exact
            element={<InspectionReport />}
          />
          <Route
            path="/Admin/CarCategories"
            exact
            element={<CarCategories />}
          />
          <Route
            path="/Admin/sub-categories/:id"
            exact
            element={<SubCategories />}
          />
          <Route
            path="/Admin/mechanic-management"
            exact
            element={<MechanicsManagement />}
          />
          <Route
            path="/Admin/inspection-management"
            exact
            element={<InspectionManagement />}
          />
          <Route path="/Admin/payment-logs" exact element={<PaymentLogs />} />
          <Route
            path="/Admin/inventory-management"
            exact
            element={<InventoryManagement />}
          />
          <Route
            path="/Admin/order-management"
            exact
            element={<OrderManagement />}
          />
          <Route
            path="/Admin/queries-management"
            exact
            element={<QueriesManagement />}
          />
          <Route
            path="/Admin/queries-management"
            exact
            element={<QueriesManagement />}
          />
          <Route
            path="/Admin/feature-ad-packages"
            exact
            element={<FeatureAdPackages />}
          />
          <Route
            path="/Admin/ad-report-management"
            exact
            element={<AdsReportManagement />}
          />
          <Route path="/Admin/news-letter" exact element={<NewsLetters />} />
          <Route path="/Admin/contents" exact element={<WebContents />} />
          <Route path="/Admin/settings" exact element={<Settings />} />
        </Routes>
      </Suspense>
      {/* <MobileBottombar /> */}
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesProvider;
