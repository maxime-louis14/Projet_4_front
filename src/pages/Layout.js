import { useEffect, useState, createContext, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { authContext } from "../Context/authContext";

const Layout = () => {
  const { auth, setAuth } = useContext(authContext);
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
            <Link to="/connextion">Connextion</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/inscription">Inscription</Link>
          </li>
          {auth && (
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setAuth(null);
                }}
              >
                Déconnection
              </button>
            </li>
          )}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
