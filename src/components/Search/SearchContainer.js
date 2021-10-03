import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMoviesActions } from "../Movies/actions";
import { getQuery } from "../../lib/api/getQuery";
import Search from "./Search";

const SearchContainer = ({ getMoviesActions }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    getQuery("", "", getMoviesActions);
  }, [getMoviesActions]);

  const search = (event) => {
    event.preventDefault();
    getQuery(query, "", getMoviesActions);
  };

  return <Search search={search} setQuery={setQuery} />;
};

export default connect(null, { getMoviesActions })(SearchContainer);
