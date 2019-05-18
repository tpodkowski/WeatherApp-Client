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
        <pre>https://svr21.supla.org/direct/67/WzYZzmZMzEY2Y5gG/read</pre>
        <input
          type="text"
          name="url"
          placeholder="URL"
        />
      </div>
      <div>
        <label>
          Grupa:
          <select name="group">
            <option value="aquamarine">Aquamarine</option>
            <option value="cornflowerblue">Cornflowerblue</option>
            <option value="coral">Coral</option>
            <option value="deeppink">Deep pink</option>
          </select>
        </label>
      </div>
      <div>
        <button className="ReactModal__SubmitButton">Dodaj</button>
      </div>
    </form>
  </Modal>
);

export default AddSensorDialog;