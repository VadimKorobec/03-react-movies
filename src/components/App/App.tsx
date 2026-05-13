import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";

import styles from "./App.module.css";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  console.log('app render')

  const handleSearch = async (query: string) => {
    try {
      setIsError(false)
      setIsLoading(true);
      setMovies([]);
      
      const data = await fetchMovies(query);
      setMovies(data);
      
      if (data.length === 0) {
        toast.error("No movies found for your request.");
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {movies.length > 0 && <MovieGrid movies={movies} />}
      <Toaster />
    </div>
  );
};

export default App;
