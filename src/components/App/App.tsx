import { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <SearchBar />
      <Toaster />
    </>
  );
};

export default App;
