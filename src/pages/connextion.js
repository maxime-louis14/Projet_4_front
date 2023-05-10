import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { authContext } from "../Context/authContext";

const Connextion = ({ token, setToken }) => {
  useEffect(() => {
    console.log("hello");
  }, []);

  const { auth, setAuth } = useContext(authContext);
  const schema = Yup.object().shape({
    email: Yup.string().email("email non valide").required(),
    password: Yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email, password: data.password }),
    };
    fetch("http://localhost:3000/login", requestOptions)
      .then((response) => {
        if (response.status == 401) {
          alert("mot de passe ou adresse mail invalide");
        }
        response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        setAuth(data.token);
      })
      .catch((e) => console.log(e));
    reset();
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h2>Lets sign you in.</h2>
        <br />

        <input
          {...register("email")}
          placeholder="email"
          type="email"
          required
        />
        <br />

        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <br />

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Connextion;
