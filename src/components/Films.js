import React from 'react';

const Films = ({ films, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='card-group'>
        {films.map(post => (
          <div key={post.id} className='card w-50'>
            <img src={post.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-truncate">{post.description}</p>
                <p className="card-text"><small className="text-muted">{post.director}</small></p>
              </div>
          </div>
        ))}
    </div>
  );
};

export default Films;