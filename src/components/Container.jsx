import UseFetch from "./UseFetch";
import React, { useState } from "react";
import Cards from "./Cards";

export default function Container() {
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const estado = UseFetch(url);
  const { cargando, data } = estado;
  cargando ? console.log("cargando") : console.log(data.results);

  return (
    <div className="container">
      <hr />
      {cargando ? <h1>Cargando...</h1> : <Cards results={data.results} />}
     
    </div>
  );
}
