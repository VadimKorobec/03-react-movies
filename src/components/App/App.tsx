import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";

import type { Movie } from "../../types/movie";
import axios from "axios";

import styles from "./App.module.css";
import { useState } from "react";
import MovieGrid from "../MovieGrid/MovieGrid";

interface MoviesHttpResponse {
  results: Movie[];
}

const myKey = import.meta.env.VITE_TMDB_TOKEN;


const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  console.log(movies)

  const handleSearch = async (query: string) => {
    const response = await axios.get<MoviesHttpResponse>(
      `https://api.themoviedb.org/3/search/movie`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${myKey}`,
        },
        params: {
          query,
          language: "en-US",
          page: 1,
        },
      },
    );
    setMovies(response.data.results)
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
       <MovieGrid movies={movies} /> 
      <Toaster />
    </>
  );
};

export default App;
