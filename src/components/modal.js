import React, { useEffect, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function ModalComponent(props) {
    const data = props.data;
  const modalRef = useRef();
  useOnClickOutside(modalRef, props.handleModalClose);

  const closeModalByEsc = (e) => {
    if (e.keyCode === 27) props.handleModalClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", closeModalByEsc);

    return () => {
      window.removeEventListener("keydown", closeModalByEsc);
    };
  }, [props.isModalOpen]);

  return (
    <div id="myModal3" class="modal" ref={modalRef}>
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" onClick={props.handleModalClose}>
            &times;
          </span>
          <h2>
            <i class={data.serviceIcon}></i> {data.serviceTitle}
          </h2>
        </div>
        <div class="modal-body">
          <img
            class="img2"
            src={data.serviceImg}
            alt="Modal image"
            width="250"
            height="250"
          />
          <p>{data.serviceDiscription}</p>
        </div>
      </div>
    </div>
  );
}

export const Modal = React.memo(ModalComponent);
