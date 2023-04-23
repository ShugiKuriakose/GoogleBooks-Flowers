import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

export const SearchBar = ({ fetchSearchString }) => {
  const [InputString, setInputString] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetchSearchString(InputString);
    setInputString("");
  };

  return (
    <form className={styles.SearchBar} onSubmit={onFormSubmit}>
      <input
        type="text"
        value={InputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter search term"
      ></input>
      <button>Search</button>
    </form>
  );
};
export default SearchBar;
