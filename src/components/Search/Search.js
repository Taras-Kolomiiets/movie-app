import React, {useCallback} from "react";

const Search = ({search, setQuery, query}) => {
    const handlerSearch = useCallback((event) => {
        search(event);
        setQuery('');
    }, [search, setQuery])

    return (
        <form className="search-form">
            <input
                className="form-input"
                type="text"
                placeholder="Search any movie"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button
                onClick={handlerSearch}
                className="btn btn-primary mb-2"
            >
                Search
            </button>
        </form>
    );
};

export default Search;
