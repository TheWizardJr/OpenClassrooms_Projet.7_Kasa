import Banner from "../../components/Banner/Banner";
import Galery from "../../components/Galery/Galery";

function Homepage() {
  return (
    <div className="flex-fill container">
      <Banner />
      <Galery />
    </div>
  );
}

export default Homepage;
