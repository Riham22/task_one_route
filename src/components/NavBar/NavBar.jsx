const NavBar = () => {
  return (
    <>
      <div className="navb py-2 px-3">
        <nav className="navb navbar navbar-expand-lg sticky-top px-5 ">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand text-white  px-2 fs-3 " href="#">
              START REACT
            </a>
            <button
              className="navbar-toggler display-flex align-items-center p-2 text-white  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <span className="navbar-toggler-icon white"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white activeButton -mr-2"
                    aria-current="page"
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
