import "./MovieItem.css";

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
            <h3 className="movie-item-title">{item.title}</h3>
            <p className="movie-item-stats">{item.vote_average}</p>
            <p className="movie-item-stats">{item.overview}</p>
            <p className="movie-item-stats">{item.release_date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieItem;
