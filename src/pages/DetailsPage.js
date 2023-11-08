import FavouritesSideBar from "../components/FavouritesSideBar";
import CityDetailsTab from "../components/CityDetailsTab";

const DetailsPage = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <FavouritesSideBar />
            <CityDetailsTab />
        </div>
      );
};

export default DetailsPage;