import React from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import { IoCloseOutline } from "react-icons/io5";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchInput = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value.trim().toLowerCase()));
  };
  const cleanInput = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={css.searchContainer}>
      <label className={css.searchLabel}>
        <span className={css.searchSpan}>
          Find contacts by name or phone number
        </span>
        <div className={css.thumbInput}>
          <input
            className={css.searchInput}
            type="text"
            value={searchInput}
            onChange={handleFilterChange}
          />
          <IoCloseOutline
            className={css.iconClean}
            size="20"
            onClick={cleanInput}
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBox;
