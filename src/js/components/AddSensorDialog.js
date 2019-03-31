import React from 'react';
import Modal from 'react-modal';

const AddSensorDialog = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  onSubmit,
}) => (
  <Modal
    isOpen={modalIsOpen}
    onAfterOpen={afterOpenModal}
    contentLabel="Add Sensor Modal"
    onSubmit={onSubmit}
  >
    <div className="ReactModal__TopBar">
      <button className="ReactModal__Close" onClick={closeModal}>X</button>
    </div>
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" name="name" placeholder="Nazwa"/>
      </div>
      <div>
        <input
          type="text"
          name="url"
          placeholder="URL"
          value="https://svr21.supla.org/direct/67/WzYZzmZMzEY2Y5gG/read"
          onChange={() => {}}
        />
      </div>
      <div>
        <button className="ReactModal__SubmitButton">Dodaj</button>
      </div>
    </form>
  </Modal>
);

export default AddSensorDialog;