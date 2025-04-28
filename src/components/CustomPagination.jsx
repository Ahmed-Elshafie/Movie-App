import React from 'react';
import ReactPaginate from 'react-paginate';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ getPage, pageCount }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  // const pageCount = 500;

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel={<FaArrowRight />}
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel={<FaArrowLeft />}
      containerClassName={'pagination justify-content-center mt-4 p-3'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-link'}
      nextClassName={'page-link'}
      breakClassName={'page-item, page-link'}
      activeClassName='active'
    />
  );
};

export default CustomPagination;
