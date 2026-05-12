import { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";

import styles from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState<string>("");
  console.log(movies)

  const handleSubmit = (movie: string) => {
    setMovies((prevState) => prevState);
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <Toaster />
    </>
  );
};

export default App;
