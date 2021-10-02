export const GET_MOVIES = 'GET_MOVIES';

export const getMoviesActions = (data) => {
    return {
        type: GET_MOVIES,
        payload: data,
    }
}

