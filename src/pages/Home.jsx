import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import Products from "../components/Products";
import ImageSlider from "../components/ImageSlider";
const Home = () => {
  return (
    <>
      <HeroSection  />
      <ImageSlider/>
      <Products/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
