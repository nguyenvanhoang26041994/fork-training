import "./input.css";

const InputSearch = () => {
  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="search__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="10" cy="10" r="7" />
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>

      <input
        type="text"
        placeholder="Search for the songs, artists"
        className="search__input"
      />
    </div>
  );
};

export default InputSearch;
