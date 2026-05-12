import styles from './MovieModal.module.css'

const MovieModal = () => {
    return (
      <div className={styles.backdrop} role="dialog" aria-modal="true">
        <div className={styles.modal}>
          <button className={styles.closeButton} aria-label="Close modal">
            &times;
          </button>
          <img
            src="https://image.tmdb.org/t/p/original/backdrop_path"
            alt="movie_title"
            className={styles.image}
          />
          <div className={styles.content}>
            <h2>movie_title</h2>
            <p>movie_overview</p>
            <p>
              <strong>Release Date:</strong> movie_release_date
            </p>
            <p>
              <strong>Rating:</strong> movie_vote_average/10
            </p>
          </div>
        </div>
      </div>
    );
}

export default MovieModal