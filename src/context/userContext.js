import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("auth", user);
  }, [user]);

  useEffect(() => {
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("fail to fetch");
      }
      setIsLoggedIn(true);
      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  // const login = (username, password) => {
  //   setIsLoggedIn(true);
  //   setUser({
  //     id: 1,
  //     nombre: "Gonzalo",
  //     apellido: "Ledesma",
  //     nombre_usuario: "Gonza",
  //     email: "gonza@admin.com",
  //     identidad_de_genero: "masculino",
  //     pais: "Argentina",
  //     descripcion:
  //       "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin",
  //     foto_perfil: "http://localhost:3001/images/luke.webp",
  //   });
  // };

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  return { isLoggedIn, user, login, logout };
}
