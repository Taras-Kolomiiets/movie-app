export const GET_MOVIES_ITEM = "GET_MOVIES_ITEM";

export const getMoviesItemActions = (data) => {
  return {
    type: GET_MOVIES_ITEM,
    payload: data,
  };
};
