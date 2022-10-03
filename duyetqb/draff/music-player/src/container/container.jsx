import Navbar from "../components/navbar/navbar";
import "./container.css";
import InputSearch from "../components/input/input";
import Popular from "../components/popular/popular";
import PlayLists from "../components/playlists/playlists";

const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="container__controller">
        <InputSearch />
        <Popular />
        <PlayLists />
      </div>
    </div>
  );
};

export default Container;
