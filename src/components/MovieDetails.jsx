import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function MovieDetails() {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  //get all movies by axios
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=492ad2e299cf4f0c3babbca2aa946440&language=ar`
    );
    console.log(res.data);
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className='small-container'>
      <Row className='justify-content-center  '>
        <Col md='12' xs='12' sm='12' className='mt-4 '>
          <div className='card-detalis  d-flex align-items-center  '>
            <img
              className='img-movie w-30 '
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt='ascad'
            />
            <div className='justify-content-center text-center  mx-auto '>
              <p className='card-text-details border-bottom'>
                اسم الفيلم: {movie.title}
              </p>
              <p className='card-text-details border-bottom'>
                تاريخ الفيلم :{movie.release_date}
              </p>
              <p className='card-text-details border-bottom'>
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className='card-text-details border-bottom'>
                التقييم :{movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className='justify-content-center '>
        <Col md='12' xs='12' sm='12' className='mt-1 '>
          <div className='card-story  d-flex flex-column align-items-start'>
            <div className='text-end p-4 '>
              <div className='text-end p-4'>
                <p className='card-text-title border-bottom'>القصة:</p>
              </div>
              <div className='text-end p-2'>
                <p className='card-text-story border-bottom mb-5'>
                  {movie.overview}
                </p>
              </div>
            </div>
            <div className='text-end px-2'>
              <p className='card-text-story'></p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col
          md='10'
          xs='12'
          sm='12'
          className='mt-2 d-flex justify-content-center '
        >
          <Link to='/'>
            <button
              style={{ backgroundColor: '#2B2F37', border: 'none' }}
              className='btn btn-primary mx-2'
            >
              رجوع للرئيسيه
            </button>
          </Link>
          {movie.homepage ? (
            <a href={movie.homepage} target='_blank' rel='noopener noreferrer'>
              <button
                style={{ backgroundColor: '#2B2F37', border: 'none' }}
                className='btn btn-primary'
              >
                مشاهدة الفيلم
              </button>
            </a>
          ) : (
            <button
              style={{ backgroundColor: '#2B2F37', border: 'none' }}
              className='btn btn-primary mx-2'
            >
              لا يوجد رابط لمشاهدة الفيلم
            </button>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default MovieDetails;
