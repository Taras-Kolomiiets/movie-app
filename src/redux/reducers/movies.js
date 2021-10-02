import {GET_MOVIES} from "../../components/Movies/actions";

const initialState = {
  movies: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      console.log('reducer', action);
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
export default movies;
