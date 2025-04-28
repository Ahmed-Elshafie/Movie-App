import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import MoviesList from './components/MoviesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=492ad2e299cf4f0c3babbca2aa946440&language=en-US&page=1'
    );
    setAllMovies(res.data.results);
    const maxPages = res.data.total_pages > 500 ? 500 : res.data.total_pages;
    setPageCount(maxPages);
  };
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=492ad2e299cf4f0c3babbca2aa946440&language=en-US&page=${page}`
    );
    setAllMovies(res.data.results);
    const maxPages = res.data.total_pages > 500 ? 500 : res.data.total_pages;
    setPageCount(maxPages);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  //search all movies by axios

  const search = async (word) => {
    if (word === '') {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=492ad2e299cf4f0c3babbca2aa946440&query=${word}&language=ar`
      );
      setAllMovies(res.data.results);
      const maxPages = res.data.total_pages > 500 ? 500 : res.data.total_pages;
      setPageCount(maxPages);
    }
  };

  return (
    <div className='font color-body'>
      <BrowserRouter>
        <NavBar search={search} />
        <Container>
          <Routes>
            <Route
              path='/'
              element={
                <MoviesList
                  movies={allMovies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path='/movie/:id' element={<MovieDetails />} />
          </Routes>
          <ScrollToTop
            smooth
            color='#0D6EFD
          '
            className='scroll-to-top'
          />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
