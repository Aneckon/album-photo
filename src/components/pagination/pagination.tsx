import React, { FC } from 'react';
import { Button } from '..';

import './pagination.css';

interface PaginationProps {
  page: number;
  setPage: (page: any) => void;
}

export const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <Button
        click={page === 1 ? () => setPage : () => setPage(page - 1)}
        className={page === 1 ? 'button__none' : 'button'}>
        Prev
      </Button>
      <Button click={() => setPage(page + 1)} className="button">
        Next
      </Button>
    </div>
  );
};
