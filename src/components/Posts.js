import React from 'react';

// filmes da requisição
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-5 g-2 justify-content-center'>
        {posts.map(posts => (
          <div key={posts.id} className='card text-white bg-dark'>
            <img src={posts.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title lh-1">{posts.title}</h5>
                <p className="card-text text-truncate">{posts.description}</p>
                <p className="card-text"><small className="text-warning">{posts.director}</small></p>
                <p className="card-text pt-0 blockquote-footer"><small className="text-muted">{posts.producer}</small></p>
              </div>
          </div>
        ))}
      
    </div>
  );
};

export default Posts;