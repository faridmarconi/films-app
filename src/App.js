import React, { useState, useEffect } from 'react';
import Films from './components/Films';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [Films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage] = useState(5);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      const res = await axios.get('https://ghibliapi.herokuapp.com/films');
      setFilms(res.data);
      setLoading(false);
    };

    fetchFilms();
  }, []);

  // Get current Films
  const indexOfLastPost = currentPage * filmsPerPage;
  const indexOfFirstPost = indexOfLastPost - filmsPerPage;
  const currentFilms = Films.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-dark text-center my-3 text-uppercase'>filmes</h1>
      <Films Films={currentFilms} loading={loading} />
      <Pagination
        FilmsPerPage={filmsPerPage}
        totalFilms={Films.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;


// ajustes cards | axios | rename post