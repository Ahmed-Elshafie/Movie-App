import React from 'react';
import { Col } from 'react-bootstrap';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { itemVariant } from './animationVariants';
import { Link } from 'react-router-dom';

const CardMovie = ({ movie }) => {
  return (
    <Col xs='6' sm='6' md='4' lg='3' className='my-1'>
      <Link to={`/movie/${movie.id}`}>
        <motion.div
          variants={itemVariant}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.5 }}
          className='card'
        >
          <div className='card'>
            <img
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              className='card__image'
              alt='hu'
            />
            <div className='card__overlay'>
              <div className='overlay__text text-center w-100 p-2'>
                <p>اسم الفيلم : {movie.original_title}</p>
                <p>تاريخ الاصدار: {movie.release_date}</p>
                <p> النوع: {movie.genre}</p>
                <p>التقييم: {movie.vote_average}</p>
                <p>عدد المقيمين : {movie.vote_count}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </Col>
  );
};

export default CardMovie;
