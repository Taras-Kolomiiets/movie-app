import Movies from "./Movies";
import {useSelector} from "react-redux";
import Search from "../Search";
import {getMoviesSelector} from "./selector";

const MovieContainer = () => {
    const movies = useSelector(getMoviesSelector);
    return (
        <>
            <Search/>
            <Movies movies={movies}/>
        </>
    );
};

export default MovieContainer;
