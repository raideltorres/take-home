// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import cx from "classnames";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { updateSearchTerm } from "@store/slices/app-state/app-state-slice";
import { selectSearchTerm } from "@store/selectors";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { TextInput } from "@atoms/text-input";
import { SearchResultsList } from "@molecules/search-results-list";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledSearch from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const Search = ({ className }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchTermChange = useCallback((event) => {
    dispatch(updateSearchTerm(event.target.value));
  }, []);

  const onChange = useMemo(() => debounce(onSearchTermChange, 400), [onSearchTermChange]);

  return (
    <StyledSearch className={cx([className, "th-search"])}>
      <TextInput label="SEARCH THE SITE" onChange={onChange} />
      {searchTerm && <SearchResultsList className="th-search__results" />}
    </StyledSearch>
  );
};

export default Search;
