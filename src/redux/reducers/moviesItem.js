import { GET_MOVIES_ITEM } from "../../components/MovieItem/actions";

const initialState = {
  moviesItem: [],
};

const moviesItem = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_ITEM:
      return { ...state, moviesItem: action.payload };
    default:
      return state;
  }
};
export default moviesItem;
