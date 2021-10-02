const GET_MOVIES = "GET_MOVIES";

const initialState = {
  movies: [],
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      console.log(action);
      return { ...state, movies: action.payload.results };
    default:
      return state;
  }
};

export default movies;
