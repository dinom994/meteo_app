import FavouritesSideBar from "../components/FavouritesSideBar";
import SearchTab from "../components/SearchTab";

const IndexPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
        <FavouritesSideBar />
        <SearchTab />
    </div>
  );
};

export default IndexPage;
