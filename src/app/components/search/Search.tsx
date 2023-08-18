import useSearchContext from "@/app/hooks/useSarchContext";
import style from "./Search.module.scss";
import { debounce } from "lodash";
import React from "react";

/**
 * @component Search
 * @returns
 */
const Search = () => {
  const { dispatch } = useSearchContext();

  /**
   * @method dispatchSearchTerm
   * @description dispatch the new search term to provider
   */
  const dispatchSearchTerm = (
    event: React.KeyboardEvent<HTMLInputElement> | any
  ) => {
    const value = event.target.value;
    console.log(value);

    dispatch({ searchTerm: value });
  };

  /**
   * @method onSearchChanged
   * @description debounce method to handle search keydownevent
   */
  const onSearchChanged = debounce(dispatchSearchTerm, 150);

  return (
    <div className={style["search"]}>
      <input
        type="text"
        placeholder="Search Your Song Here..."
        onKeyDown={onSearchChanged}
      />
    </div>
  );
};

export default Search;
