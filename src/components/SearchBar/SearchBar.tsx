import toast from "react-hot-toast";

import styles from "./SearchBar.module.css";

interface SeachBarProps {
  onSubmit: (movies: string) => void;
}

const SearchBar = ({ onSubmit }: SeachBarProps) => {
  const handleSubmit = (formData: FormData) => {
    const movie = formData.get("movie") as string;
    if (movie === "") {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(movie);
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
