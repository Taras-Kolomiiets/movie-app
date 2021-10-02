import Movies from "./Movies";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    movies: state.movies.movies,
});

const MovieContainer = ({movies}) => {
  return (
      <Movies movies={movies}/>
  )
};


export default connect(mapStateToProps, null)(MovieContainer);
