import backgroundImage from "../assets/Images/auth_bg.png";
import logo from "../assets/Images/logo.png";
import headerLogo from "../assets/Images/headerLogo.png";
import pdfIcon from "../assets/Images/pdf.png";
import blackLogo from "../assets/Images/logo-black.png";
import haederImage1 from "../assets/Images/slide-1.png";
import haederImage2 from "../assets/Images/slide-2.png";
import haederImage3 from "../assets/Images/slide-3.png";
import verticalAdCar from "../assets/Images/left-ad-car.png";
import horizontalCar from "../assets/Images/headlight.png";
import interior from "../assets/Images/interior.png";
import meter from "../assets/Images/meter.png";
import types from "../assets/Images/type.png";
import transmission from "../assets/Images/transmission.png";
import milage from "../assets/Images/milage.png";
import backgroundUsedCar from "../assets/Images/used-car.png";
import transparentBGImage from "../assets/Images/trans-image.png";
import compareBg from "../assets/Images/cpmpare.png";
import tickMark from "../assets/Images/true.png";
import question from "../assets/Images/sure.png";
import c1 from "../assets/Images/c1.png";
import vs from "../assets/Images/vs.png";
import c2 from "../assets/Images/c2.png";
import footerBG from "../assets/Images/footer-bg.png";
import finance from "../assets/Images/finance.png";
import carInfo from "../assets/Images/car-info.png";
import uploadPhoto from "../assets/Images/upload-photo.png";
import tag from "../assets/Images/tag.png";
import calendar from "../assets/Images/calendar.png";
import Hybrid from "../assets/Images/hybrid.png";
import km from "../assets/Images/km.png";
import automatic from "../assets/Images/automatic.png";
import carIcon from "../assets/Images/car.png";
import pencil from "../assets/Images/pencil.png";
import palette from "../assets/Images/palette.png";
import engine from "../assets/Images/engine.png";
import docImg from "../assets/Images/docImg.jpg";
import myProfile from "../assets/Images/profile.png";
import myOrder from "../assets/Images/order.png";
import myAds from "../assets/Images/ads.png";
import wishlist from "../assets/Images/heart.png";
import logout from "../assets/Images/logout.png";
import defaultProfile from "../assets/Images/defaultProfile.jpeg";
import paymentCard from "../assets/Images/card.png";
import placeholder from "../assets/Images/placeholder.png";
import errorPlaceholder from "../assets/Images/errorPlaceholder.gif";
import verified from "../assets/Images/verified.png";
import newsLetterIcon from "../assets/Images/letter.png";

export const images = {
  logo: logo,
  verified: verified,
  authBackground: backgroundImage,
  meter: meter,
  types: types,
  transmission: transmission,
  milage: milage,
  headerLogo: headerLogo,
  pdfIcon: pdfIcon,
  blackLogo: blackLogo,
  haederImage1: haederImage1,
  haederImage2: haederImage2,
  haederImage3: haederImage3,
  verticalAdCar: verticalAdCar,
  horizontalCar: horizontalCar,
  interior: interior,
  backgroundUsedCar: backgroundUsedCar,
  transparentBGImage: transparentBGImage,
  c1: c1,
  c2: c2,
  vs: vs,
  compareBg: compareBg,
  footerBG: footerBG,
  tickMark: tickMark,
  question: question,
  finance: finance,
  carInfo: carInfo,
  tag: tag,
  uploadPhoto: uploadPhoto,
  calendar: calendar,
  Hybrid: Hybrid,
  km: km,
  automatic: automatic,
  carIcon: carIcon,
  pencil: pencil,
  palette: palette,
  engine: engine,
  myProfile: myProfile,
  myOrder: myOrder,
  wishlist: wishlist,
  myAds: myAds,
  logout: logout,
  defaultProfile: defaultProfile,
  paymentCard: paymentCard,
  placeholder: placeholder,
  errorPlaceholder: errorPlaceholder,
  docImg: docImg,
  newsLetterIcon: newsLetterIcon,
};
export const onImageError = (e) => {
  e.target.src = images.errorPlaceholder;
};
