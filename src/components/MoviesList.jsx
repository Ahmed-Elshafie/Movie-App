import React from 'react';
import { Row } from 'react-bootstrap';
import CardMovie from './CardMovie';
import NotFound from './NotFound';
import CustomPagination from './CustomPagination';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { containerVariants } from './animationVariants';

const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <Row className='mt-3'>
        {movies.length >= 1 ? (
          movies.map((movie) => {
            return <CardMovie key={movie.id} movie={movie} />;
          })
        ) : (
          <NotFound />
        )}
        {movies.length >= 1 ? (
          <CustomPagination getPage={getPage} pageCount={pageCount} />
        ) : null}
      </Row>
    </motion.div>
  );
};

export default MoviesList;
