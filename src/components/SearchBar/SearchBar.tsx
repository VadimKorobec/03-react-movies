import toast from "react-hot-toast";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const handleSubmit = (formData: FormData) => {
    const movie = formData.get("movie") as string;
    if (movie === "") {
      toast.error("Please enter your search query.");
      return;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <form className={styles.form} action={handleSubmit}>
          <input className={styles.input} type="text" name="movie" />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
