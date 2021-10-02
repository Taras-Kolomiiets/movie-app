import { connect } from "react-redux";
import { Link } from "react-router-dom";

const urlComponent = "https://image.tmdb.org/t/p/w342";

const Movies = (props) => {
  console.log(props.movies);
  return (
    <>
      <ul className="gallery">
        {props.movies.map((el) => {
          return (
            <li>
              <img src={urlComponent + el.poster_path} alt="" />
              <p>{el.title}</p>
              <p>{el.vote_average}</p>
              <p>{el.release_date}</p>
              <Link
                to={`/movie/${el.id}`}
                style={{ height: "15px", width: "25px" }}
              >
                Link
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, null)(Movies);
