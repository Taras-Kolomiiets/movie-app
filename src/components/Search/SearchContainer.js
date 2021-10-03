import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMoviesActions } from "../Movies/actions";
import { getQuery } from "../../lib/api/getQuery";
import Search from "./Search";

const SearchContainer = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    getQuery("", "", props.getMoviesActions);
  }, [props.getMoviesActions]);

  const search = (event) => {
    event.preventDefault();
    getQuery(query, "", props.getMoviesActions);
  };

  return <Search search={search} setQuery={setQuery} />;
};

export default connect(null, { getMoviesActions })(SearchContainer);
