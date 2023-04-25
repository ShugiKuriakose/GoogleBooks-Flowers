import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  fetchSearchString: (query: string) => void;
}

export const SearchBar = ({ fetchSearchString }: SearchBarProps) => {
  const [InputString, setInputString] = useState<string>("");

  const onFormSubmit = (event: React.FormEvent) => {
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
