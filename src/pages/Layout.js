import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/compte">Compte</Link>
          </li>
          <li>
            <Link to="/photos">MesPhotos</Link>
          </li>
          <li>
            <Link to="/connextion">Connextion</Link>
          </li>
          <li>
          <Link to="/inscription">Inscription</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;