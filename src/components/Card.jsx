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
        // <div className="card border-secondary mb-3" style={{ width: "21rem" }}>
        //   <div className="card-body text-bg-dark p-3 card-style">
        //     <img src={data.image} class="card-img-top" alt="imagen" />
        //   </div>

        //   <div className="card-header">
        //     <h5 className="card-title">{data.id} </h5>
        //   </div>

        //   <div className="card-footer text-bg-danger p-3">
        //     <p className="card-text">Nombre:{data.name}</p>
        //     <p className="card-text">Status:{data.status}</p>
        //     <p className="card-text">Especie:{data.species}</p>
        //     <a href="#" class="btn btn-dark">
        //       Ver mas...
        //     </a>
        //   </div>
        // </div>

        <div className="col-md-4">
    		    <div className="card profile-card-1">
    		        <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background"/>
    		        <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="profile-image" className="profile"/>
                    <div className="card-content">
                    <h2>Savannah Fields</h2>
                    <h3><small>Engineer</small></h3>
                    <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i class="fa fa-twitter"></i></a><a href="#"> <i className="fa fa-google-plus"></i></a></div>
                    </div>
                </div>
    		</div>
      )}
    </div>
  );
};

export default Card;
