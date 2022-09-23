import React from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const ModalCard = ({show, handleClose}) => {
  

  return (
    <div className="container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:"#000000"}}>
          <Modal.Title className="title-modal">Un poco de su historia...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Esta serie cuenta las aventuras de Rick, un científico loco, egoísta y alcohólico que, junto a su nieto Morty, viven momentos que mezclan problemas familiares junto a viajes en el tiempo, intergalácticos o, incluso, a través del tiempo. Todo esto se vive a través de una base de humor negro y sátira profunda a la sociedad que, al tratarse de un contenido más adulto, encaja a la perfección con su público objetivo.</Modal.Body>
        <Modal.Footer style={{backgroundColor:"#000000"}}>
          <Button onClick={handleClose} style={{ backgroundColor: "#34E807" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCard;
