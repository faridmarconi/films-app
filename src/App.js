import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Posts from './components/Posts';
=======
import Films from './components/Films';
>>>>>>> 6d9c1d47eeae2a4d3251958871e188acdd81ca92
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
<<<<<<< HEAD
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://ghibliapi.herokuapp.com/films');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current Films ok
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
=======
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
>>>>>>> 6d9c1d47eeae2a4d3251958871e188acdd81ca92

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-dark text-center my-3 text-uppercase'>filmes</h1>
<<<<<<< HEAD
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
=======
      <Films Films={currentFilms} loading={loading} />
      <Pagination
        FilmsPerPage={filmsPerPage}
        totalFilms={Films.length}
>>>>>>> 6d9c1d47eeae2a4d3251958871e188acdd81ca92
        paginate={paginate}
      />
    </div>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;


// ajustes cards | axios | rename post
>>>>>>> 6d9c1d47eeae2a4d3251958871e188acdd81ca92
