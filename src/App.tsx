import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import { Pagination, Content, Favorites, Button } from './components';
import { PhoneGet } from './components/photoServis';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    PhoneGet(setImages, page, setError);
  }, [page]);

  return (
    <div className="app">
      {location.pathname === '/' ? (
        <Button click={() => navigate('/favorites')} className={'button__favorites'} />
      ) : (
        <Button click={() => navigate('/')} className="button__close">
          Close
        </Button>
      )}
      <Routes>
        <Route path="/" element={<Content error={error} images={images} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {location.pathname === '/' ? <Pagination page={page} setPage={setPage} /> : ''}
    </div>
  );
};
