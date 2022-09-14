import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="home">
      <h1>Inicio</h1>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="6000">
            <img src="gatito.png" className="d-block w-100" alt="poke1" />
          </div>

          <div className="carousel-item" data-bs-interval="6000">
            <img src="gatito-2.png" className="d-block w-100" alt="poke2" />
          </div>

          <div className="carousel-item" data-bs-interval="6000">
            <img src="gatito-3.png" className="d-block w-100" alt="poke4" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
