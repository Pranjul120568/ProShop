// import { Container } from "react-bootstrap";

//components
// import FeaturedCarousel from "../components/FeaturedCarousel";
import SquareImages from "../components/home/SquareImages";
import Meta from "../components/Meta";
// import AboutTaylor from "../components/home/AboutTaylor";

const HomeScreen = () => {
  return (
    <>
      <Meta title="Proshop" />
      <SquareImages />
      {/* <AboutTaylor /> */}
      {/* <Container>
        <FeaturedCarousel />
      </Container> */}
    </>
  );
};

export default HomeScreen;
