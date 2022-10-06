import React, { FC, useState } from 'react';
import { Photo, Modal } from '..';

import './content.css';

interface ContentProps {
  error: any;
  images: any;
}

export const Content: FC<ContentProps> = ({ error, images }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="content">
      {error === null
        ? images.length &&
          images.map((item: any) => (
            <Photo setOpen={setOpen} key={item.id} id={item.id} img={item.download_url} />
          ))
        : 'Erorr'}
      <Modal setOpen={setOpen} open={open} />
    </div>
  );
};
