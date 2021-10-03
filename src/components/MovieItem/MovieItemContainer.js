import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { useParams} from "react-router-dom";
import {getQuery} from "../../lib/api/getQuery";
import {getMoviesItemActions} from "./actions";
import {getMovieSelector} from "./selector";
import MovieItem from "./MovieItem";

const MovieItemContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const StateProps = {
        moviesItem: useSelector((state) => getMovieSelector(state, id)),
    }

    const handlerGetMoviesItemActions = useCallback(() => {
        dispatch(getMoviesItemActions)
    }, [dispatch]);

    useEffect(() => {
        getQuery('', handlerGetMoviesItemActions)
    }, [id, handlerGetMoviesItemActions])

    return (
        <MovieItem {...StateProps} />
    )
}

export default MovieItemContainer;
