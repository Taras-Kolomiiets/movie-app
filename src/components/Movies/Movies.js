import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../redux/reducers/movies";
import { useQuery } from "../../lib/api/useQuery";
const GET_MOVIES = "GET_MOVIES";

const Movies = (props) => {
  const { data, refresh } = useQuery("Shrek");

  return <p>Movies!</p>;
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, null)(Movies);
