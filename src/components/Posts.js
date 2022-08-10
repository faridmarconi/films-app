import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='card-group'>
        {posts.map(posts => (
          <div key={posts.id} className='card'>
            <img src={posts.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{posts.title}</h5>
                <p className="card-text text-truncate">{posts.description}</p>
                <p className="card-text"><small className="text-muted">{posts.director}</small></p>
              </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;