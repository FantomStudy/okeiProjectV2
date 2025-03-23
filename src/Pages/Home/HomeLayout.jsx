import  Description from "./HomeComponents/Description/Description";
import HomeDirections from "./HomeDirections/HomeDirections";
import HomeCards from "./HomeCards/HomeCards";
import HomeForm from "../Home/HomeForm/HomeForm";
import Footer from "../../Global/Footer/Footer";
import UnderFooter from "../../Global/Footer/UnderFooter";
import Hero from "./HomeComponents/Hero/Hero";

export default function HomeLayout() {
  return (
    <>
      <div className="container">
        <Hero />
        <Description />
        {/* <div className="gridLines">
          <HomeDirections />
          <HomeCards />
          <HomeForm />
        </div> */}
      </div>
      {/* <Footer /> */}
      {/* <UnderFooter /> */}
    </>
  );
}
