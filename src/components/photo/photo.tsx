import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setfavirote } from '../../redux/slice/faviroteSlice';
import { setModal } from '../../redux/slice/modalSlice';

import './photo.css';

interface PhotoProps {
  img: any;
  setOpen: (date: boolean) => void;
  id: number;
}

export const Photo: FC<PhotoProps> = ({ img, setOpen, id }) => {
  const dispatch = useDispatch();
  const handleClickModalOpen = () => {
    setOpen(true);
    dispatch(setModal(img));
  };
  const handleClickAddFavorite = (event: any) => {
    event.stopPropagation();
    dispatch(setfavirote({ id, img }));
    localStorage.setItem('favorite', JSON.stringify({ id, img }));
  };

  return (
    <div onClick={handleClickModalOpen} className="photo">
      <img alt="" src={img} />
      <div className="photo__favorite" onClick={handleClickAddFavorite}>
        <svg
          width="485"
          height="463"
          viewBox="0 0 485 463"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M348.629 0.208984C307.041 0.208984 268.14 19.238 242.5 51.061C216.859 19.238 177.959 0.208984 136.371 0.208984C61.176 0.208984 0 61.385 0 136.579C0 195.643 35.289 264.037 104.885 339.859C158.525 398.297 216.88 443.546 233.487 456.023L242.497 462.792L251.506 456.024C268.114 443.547 326.47 398.299 380.111 339.862C449.71 264.04 485 195.646 485 136.579C485 61.385 423.824 0.208984 348.629 0.208984Z"
            fill="#91D5FF"
          />
        </svg>
      </div>
    </div>
  );
};
