const urlComponent = "https://image.tmdb.org/t/p/w342";

const MovieItem = ({ moviesItem }) => {
  return (
    <div className="movie-wrap">
      {moviesItem.map((item) => {
        return (
          <div key={item.id} className="movie-item">
            <img
              src={urlComponent + item.backdrop_path}
              alt=""
              className="movie-item-img"
            />
            <div className="movie-item-wrapper">
              <h3 className="movie-item-title">{item.title}</h3>
              <p className="movie-item-stats">
                <span className="movie-item-description">Rating: </span>
                {item.vote_average}
              </p>
              <p className="movie-item-stats">
                <span className="movie-item-description"> Overview: </span>
                {item.overview}
              </p>
              <p className="movie-item-stats">
                <span className="movie-item-description">Release date: </span>
                {item.release_date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieItem;
