import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container navbar bg-base-100 py-6">
          <div className="navbar-start">
            <Link className="text-3xl font-medium" to={"/"}>
              DevScholar
            </Link>
          </div>
          <div className="navbar-center">
            <nav className="flex items-center gap-x-5">
              <Link
                className="text-2xl leading-none hover:underline"
                to={"/articles"}
              >
                статьи
              </Link>
              <Link
                className="text-2xl leading-none hover:underline"
                to={"/courses"}
              >
                курсы
              </Link>
              <Link
                className="text-2xl leading-none hover:underline"
                to={"/chats"}
              >
                чаты
              </Link>
            </nav>
          </div>
          <div className="navbar-end">
            <button>
              <svg
                width="42"
                height="44"
                viewBox="0 0 42 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12.7272C2 8.00874 7.87159 3.97328 11.3763 2.74554C16.2573 1.03569 21.2763 2.54768 25.9741 4.45669C29.0853 5.72093 31.9349 8.4382 31.8133 12.2836C31.7227 15.1467 27.916 20.6555 26.1426 22.4237C23.1364 25.4211 20.1764 25.846 16.1767 25.846C13.4919 25.846 10.1555 25.5959 8.34444 22.9941C6.81866 20.8021 5.78477 18.0368 4.63884 15.5791C3.98822 14.1838 3.73343 12.2796 2.50531 11.5865"
                  stroke="#141613"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M26.3904 25.3327C28.6423 25.7949 30.6398 29.7877 32.2968 31.4176C34.0605 33.1525 35.7977 34.8571 37.5703 36.5501C39.281 38.184 40.4654 40.2678 42 42"
                  stroke="#141613"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
