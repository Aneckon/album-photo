import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import './modal.css';

interface ModalProps {
  open: boolean;
  setOpen: (date: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ open, setOpen }) => {
  const img = useSelector((state: any) => state.modalReducer.modalDate)
  
  return (
    <div className={open ? 'modal__open' : 'modal'}>
      <img alt="" src={img} />
      <div className="modal__remove" onClick={() => setOpen(false)}>
        <img src="assets/remove.svg" alt="" />
      </div>
    </div>
  );
};
