import { HomeTitle as Home } from "./HomeComponents/HomeTitle/HomeTitle";
import HomeTitle from "./HomeComponents/HomeTitle/v2/HomeTitle";
import HomeDescription from "./HomeComponents/HomeDescription/HomeDescription";
import HomeDirections from "./HomeDirections/HomeDirections";
import HomeCards from "./HomeCards/HomeCards";
import HomeForm from "../Home/HomeForm/HomeForm";
import Footer from "../../Global/Footer/Footer";
import UnderFooter from "../../Global/Footer/UnderFooter";

export default function HomeLayout() {
  return (
    <>
      <div className="container">
        <Home />
        <HomeTitle />
        {/* <HomeDescription /> */}
        {/* <div className="gridLines">
          <HomeDirections />
          <HomeCards />
          <HomeForm />
        </div> */}
      </div>
      <Footer />
      <UnderFooter />
    </>
  );
}
