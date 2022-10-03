import "./playlists.css";

const Playlists = () => {
  return (
    <div className="playlists">
      <span className="playlists__label">playlists</span>
      <h3 className="playlists__title">Best of</h3>
      <div className="playlists__favourite">
        {[1, 2, 3].map((item, index) => (
          <div className="favourite-item" key={index}>
            <img
              className="favourite-item__image"
              src="https://cdn.dribbble.com/userupload/3597400/file/original-12d2745db1dc7fb58d1e1e9182ca1416.jpg?compress=1&amp;resize=1200x900"
              alt=""
            />
            <span class="favourite-item__title">Lorem ipsum.</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
