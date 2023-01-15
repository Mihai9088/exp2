import React from "react";
import { FaTimes } from "react-icons/fa";
import { useMrUniversContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useMrUniversContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal contents</h3>
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
