import React from "react";
import Card from "./Card";

const Cards = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.map((p) => (
          <li
            className="card-item"
            style={{ listStyle: "none" }}
            key={p.nombre}
          >
            <Card url={p.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
