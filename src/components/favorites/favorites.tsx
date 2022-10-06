import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavirote } from '../../redux/slice/faviroteSlice';

import './favorites.css';

export const Favorites = () => {
  const [favorite, setFavorite] = useState<any>([]);
  const image = useSelector((state: any) => state.favoriteReducer.faviroteDate);
  const dispatch = useDispatch();

  useEffect(() => {
    setFavorite(localStorage.getItem('favorite'));
  }, []);

  return (
    <div className="favorites">
      {localStorage.getItem('favorite') ? (
        <div className="favorites__item">
          <img src={favorite.length ? JSON.parse(favorite).img : ''} alt="" />
          <div
            className="favorite__remove"
            onClick={() =>
              dispatch(removeFavirote(favorite.length ? JSON.parse(favorite).id : ''))
            }>
            <img src="assets/remove.svg" alt="" />
          </div>
        </div>
      ) : (
        image.map((item: any) => (
          <div className="favorites__item">
            <img key={item.id} src={item.img} alt="" />
            <div className="favorite__remove" onClick={() => dispatch(removeFavirote(item.id))}>
              <img src="assets/remove.svg" alt="" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};
