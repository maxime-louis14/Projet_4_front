import React, { createContext, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  redirect,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Compte from "./pages/Compte";
import Layout from "./pages/Layout";
import Inscription from "./pages/inscription";
import Connextion from "./pages/connextion";
import Photos from "./pages/Photos";
import { authContext, AuthProvider } from "./Context/authContext";
function App() {
  const { auth } = useContext(authContext);
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connextion" element={<Connextion />} />
          <Route
            path="/photos"
            element={auth ? <Photos /> : <Navigate to="/connextion" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWrapper />);
