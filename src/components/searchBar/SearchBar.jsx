import { useState } from "react";
import classes from "./SearchBar.module.css";
import PropTypes from "prop-types";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  const findMovies = (e) => {
    e.preventDefault();
    const result = query.trim();

    if (result === "") {
      alert("Please input movie.");
      return;
    }
    onSubmit(result);
    setQuery("");
  };
  return (
    <form className={classes.wrapper} onSubmit={findMovies}>
      <input
        className={classes.input}
        type="text"
        placeholder="find movies"
        value={query}
        onChange={changeQuery}
      />
      <button type="submit" className={classes.button}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
