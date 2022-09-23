import React from "react";
import UseFetch from "./UseFetch";
import ModalCard from "./ModalCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";



const Card = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      {cargando ? (
        <h6>Cargando</h6>
      ) : (
        <div className="card border-secondary mb-3" style={{ width: "21rem" }} >
          <div className="card-body text-bg-dark p-3 card-style">
            <img src={data.image} class="card-img-top" alt="imagen" />
          </div>

          <div className="card-header">
            <h5 className="card-title">{data.id} </h5>
          </div>

          <div className="card-footer p-3 card" style={{ backgroundColor: "#34E807" }}>
            <p className="card-text">Nombre:{data.name}</p>
            <p className="card-text">Status:{data.status}</p>
            <p className="card-text">Especie:{data.species}</p>

            <Button variant="dark" onClick={handleShow}>
        Ver mas...
      </Button>
          </div>
         
         </div>
      )}
       <ModalCard show={show} handleClose={handleClose} />
    </div>
  );
};

export default Card;
