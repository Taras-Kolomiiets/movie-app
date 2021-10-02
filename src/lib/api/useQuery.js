import React from "react";
import { server } from "./api";

export const useQuery = (query) => {
  const [state, setState] = React.useState({ data: null });

  const fetch = React.useCallback(() => {
    const fetchApi = async () => {
      const data = await server.fetch(query);
      setState({ data });
    };
    fetchApi();
  }, [query]);

  React.useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, refresh: fetch };
};
