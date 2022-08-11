import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

// condição da página
const condition = true;

// const do App
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const baseURL = "https://ghibliapi.herokuapp.com/films";

  // função para válidar requisição em axios
  const getAnswer = async () => {
    setLoading(true);
    const res = await axios.get(baseURL);
    setPosts(res.data);
    setLoading(false);
  };

  // estado das postagens
  useEffect(() => {
    if (!condition) {
      return;
    }
    getAnswer();
  }, []);

  // função Btn atualizar requisição e volta a primeira página
  function updatePost() {
    getAnswer();
    paginate(1);
  }

  // Paginação dos Films
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-2'>

        <div className="row align-items-center">
          <div className="col">
            <h1 className='text-light my-3 h3'><strong>Return all films</strong></h1>
          </div>
          <div className="col d-flex justify-content-end">
            <button className="btn btn-light text-dark rounded-0 my-4" onClick={updatePost}>Atualizar</button>
          </div>
        </div>

      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

    </div>
  );
};

export default App;