import React, {useCallback, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getMoviesActions} from "../Movies/actions";
import {getQuery} from "../../lib/api/getQuery";
import Search from "./Search";

const SearchContainer = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    const handlerGetMoviesItemActions = useCallback((data) => {
        dispatch(getMoviesActions(data))
    }, [dispatch]);

    useEffect(() => {
        getQuery("", handlerGetMoviesItemActions);
    }, [dispatch, handlerGetMoviesItemActions]);

    const search = (event) => {
        event.preventDefault();
        getQuery(query, handlerGetMoviesItemActions);
    };

    return <Search search={search} setQuery={setQuery} query={query}/>;
};

export default SearchContainer;
