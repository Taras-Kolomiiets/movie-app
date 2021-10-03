export const GET_MOVIES = "GET_MOVIES";

export const getMoviesActions = (payload) => {
  return {
    type: GET_MOVIES,
    payload,
  };
};
