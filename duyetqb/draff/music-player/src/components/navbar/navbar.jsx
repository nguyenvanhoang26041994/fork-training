import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar__item item--flag">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
            <line x1="5" y1="5" x2="5" y2="21" />
            <line x1="19" y1="5" x2="19" y2="14" />
            <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
            <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
          </svg>
        </div>
        <div className="navbar__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </div>
        <div className="navbar__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
        </div>
        <div className="navbar__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
            <circle cx="14" cy="17" r="3" />
            <path d="M17 17v-13h4" />
            <path d="M13 5h-10" />
            <line x1="3" y1="9" x2="13" y2="9" />
            <path d="M9 13h-6" />
          </svg>
        </div>
        <div className="navbar__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
        </div>
        <div className="navbar__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
            <circle cx="6" cy="10" r="2" />
            <line x1="6" y1="4" x2="6" y2="8" />
            <line x1="6" y1="12" x2="6" y2="20" />
            <circle cx="12" cy="16" r="2" />
            <line x1="12" y1="4" x2="12" y2="14" />
            <line x1="12" y1="18" x2="12" y2="20" />
            <circle cx="18" cy="7" r="2" />
            <line x1="18" y1="4" x2="18" y2="5" />
            <line x1="18" y1="9" x2="18" y2="20" />
          </svg>
        </div>
        <div className="navbar__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__item--icon"
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
            <circle cx="8.5" cy="8.5" r="1" fill="currentColor" />
            <path d="M4 7v3.859c0 .537 .213 1.052 .593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l4.834 -4.834a2.025 2.025 0 0 0 0 -2.864l-8.117 -8.116a2.025 2.025 0 0 0 -1.431 -.593h-3.859a3 3 0 0 0 -3 3z" />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
