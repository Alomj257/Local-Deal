import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPaginationItems = () => {
    const items = [];

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    // Render left arrow icon
    items.push(
      <Pagination.Prev key="prev" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
    );

    // Render pagination items
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    // Render right arrow icon
    items.push(
      <Pagination.Next key="next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
    );

    return items;
  };

  return (
    <Pagination className="justify-content-center">
      {renderPaginationItems()}
    </Pagination>
  );
};

export default CustomPagination;
