import classes from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const urlComponent = "https://image.tmdb.org/t/p/w500";
  const { poster_path, title, release_date, vote_average, overview } = movie;

  return (
    <div className={classes.wrapper}>
      <img
        src={urlComponent + poster_path}
        alt={title}
        className={classes.image}
      />
      <div className={classes.innerWrapper}>
        <h1>{title}</h1>
        <p>
          <span className={classes.decsr}>Release date: </span>
          {release_date}
        </p>
        <p>
          <span className={classes.decsr}>Rating: </span> {vote_average}
        </p>
        <p className={classes.overview}>
          <span className={classes.decsr}>Overview: </span> {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
