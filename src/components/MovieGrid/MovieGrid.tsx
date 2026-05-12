import type { Movie } from "../../types/movie";
import styles from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <ul className={styles.grid}>
      {movies.map((item) => (
        <li key={item.id}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt="movie title"
              loading="lazy"
            />
            <h2 className={styles.title}>Movie title</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieGrid;
