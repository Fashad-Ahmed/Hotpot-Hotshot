import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Footer from "./../components/Footer";
import Loader from "./../components/Loader";
import Subscribe from "../components/Subscribe";
import Topbar from "../components/Topbar";

const About = lazy(() => import("../views/About"));
const Blog = lazy(() => import("../views/Blog"));
const BoxTruck = lazy(() => import("../views/BoxTruck"));
const BoxTruckForm = lazy(() => import("../views/BoxTruckForm"));
const CarriersAapp = lazy(() => import("../views/CarriersAapp"));
const CdlNon = lazy(() => import("../views/CdlNon"));
const CDLSchool = lazy(() => import("../views/CDLSchool"));
const ELD = lazy(() => import("../views/ELD"));
const GeneralFreight = lazy(() => import("../views/GeneralFreight"));
const GeneralFreightForm = lazy(() => import("../views/GeneralFreightForm"));
const HHGuide = lazy(() => import("../views/HHGuide"));
const Insurance = lazy(() => import("../views/Insurance"));
const JunkHaul = lazy(() => import("../views/JunkHaul"));
const JunkHaulForm = lazy(() => import("../views/JunkHaulForm"));
const MotorVehicle = lazy(() => import("../views/MotorVehicle"));
const MotorVehicleForm = lazy(() => import("../views/MotorVehicleForm"));
const Roadside = lazy(() => import("../views/Roadside"));
const TrackingTech = lazy(() => import("../views/TrackingTech"));
const Under2k = lazy(() => import("../views/Under2k"));
const Under2kForm = lazy(() => import("../views/Under2kForm"));
const Usdot = lazy(() => import("../views/Usdot"));
const Vetting = lazy(() => import("../views/Vetting"));
const WeightMatters = lazy(() => import("../views/WeightMatters"));
const Contact = lazy(() => import("../views/Contact"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const FAQ = lazy(() => import("../views/FAQ"));
const Help = lazy(() => import("../views/Help"));
const Home = lazy(() => import("../views/Home"));

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" exact element={<Navigate to="/" replace />} />
          <Route path="/About" exact element={<About />} />
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
        </Routes>
      </Suspense>
      {/* <MobileBottombar /> */}
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesProvider;
