import Banner from "../../components/Banner";
import HousingList from "../../components/HousingList";
import homeBanner from "../../assets/banner-home.png"

function Home() {
  return (
    <div>
      <Banner picture={homeBanner} title="Chez vous, partout et ailleurs" />
      <HousingList />
    </div>
  );
}

export default Home;
