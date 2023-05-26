import React, { useEffect, useState, useContext } from "react";
import { authContext } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DeleteAccount = ({ userId }) => {
  const { auth, setAuth } = useContext(authContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const history = useNavigate();

  const handleDelete = () => {
    setIsDeleting(true);
    const token = localStorage.getItem('token');

    axios
      .delete(`http://127.0.0.1:3000/account`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setIsDeleting(false);
        alert(response.data.message);
        localStorage.removeItem("userId");
        localStorage.removeItem("token");

        if (response.data.logaout) {
          setAuth(null)
        }

        history("/inscription");
        window.location.reload();
      })
      .catch(error => {
        console.error(error.response?.data);
        setIsDeleting(false);
      });
  };

  return (
    <div>
      {isDeleting ? (
        <p>Deleting account...</p>
      ) : (
        <>
          <p>Are you sure you want to delete your account?</p>
          <button onClick={handleDelete}>Supprimer le compte</button>
        </>
      )}

      {auth && (
        <li>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setAuth(null);
            }}
          >
            Déconnexion
          </button>
        </li>
      )}
    </div>
  );
};

export default DeleteAccount;
