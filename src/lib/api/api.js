const API_KEY = "9226d2cbb7ed48fe3f3e70d3c7574602";
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

export const server = {
  fetch: async (query) => {
    console.log(query);
    const res = await fetch(`${BASE_URL}&query=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    });

    return res.json();
  },
};
