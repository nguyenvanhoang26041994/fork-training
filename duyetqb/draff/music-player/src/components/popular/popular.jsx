import "./popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <span className="popular__label">popular</span>
      <h3 className="popular__title">
        <p>Its alright</p>
        <p>ft. Shawn kagan</p>
      </h3>
      <div className="popular__list">
        {[1, 2, 3].map((item, index) => (
          <div className="song-item" key={index}>
            <div className="song-item__avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="song-item__avatar--icon-star"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              <img
                src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg"
                alt=""
                className="song-item__avatar--image-avatar"
              />
              <span className="song-item__avatar--name">
                Lorem, ipsum dolor amet.
              </span>
            </div>
            <div className="song-item__like-section">
              <div className="like-section__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="like-section__item--icon-heart"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <span className="like-section__item--text-counter">225</span>
              </div>
              <div className="like-section__item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="like-section__item--icon-play"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 4v16l13 -8z" />
                </svg>
                <span className="like-section__item--text-counter">25k</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
