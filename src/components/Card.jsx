import React from "react";
import UseFetch from "./UseFetch";

const Card = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <div className="container">
      {cargando ? (
        <h6>Cargando</h6>
      ) : (
        <div className="card border-secondary mb-3" style={{ width: "18rem" }}>
          <div className="card-body text-bg-dark p-3 card-style">
            <img src={data.image} class="card-img-top" alt="imagen" />
          </div>

          <div className="card-header">
            <h5 className="card-title">{data.id} </h5>
          </div>

          <div className="card-footer text-bg-danger p-3">
            <p className="card-text">Nombre:{data.name}</p>
            <p className="card-text">Nombre:{data.name}</p>
            <p className="card-text">Status:{data.status}</p>
            <p className="card-text">Especie:{data.species}</p>
            <a href="#" class="btn btn-dark">
              Ver mas...
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
