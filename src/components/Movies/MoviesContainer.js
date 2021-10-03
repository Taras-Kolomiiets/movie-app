import Movies from "./Movies";
import { connect } from "react-redux";
import Search from "../Search";

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

const MovieContainer = ({ movies }) => {
  return (
    <>
      <Search />
      <Movies movies={movies} />
    </>
  );
};

export default connect(mapStateToProps, null)(MovieContainer);
