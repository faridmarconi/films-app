import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';


const condition = true;


const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const baseURL = "https://ghibliapi.herokuapp.com/films";


  const getAnswer = async () => {
    setLoading(true);
    const res = await axios.get(baseURL);
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    if (!condition) {
      return;
    }
    
    getAnswer();
  }, []);


  function updatePost() {
    getAnswer();
    paginate(1);
  }

  // Get current Films ok
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-2'>
        <div className="row align-items-center">
          <div className="col">
            <h1 className='text-light my-3 text-uppercase h3'><strong>Return all films</strong></h1>
          </div>
          <div class="col d-flex justify-content-end">
            <button className="btn btn-light rounded-0 my-4" onClick={updatePost}>Atualizar</button>
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