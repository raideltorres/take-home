// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { selectSearchResults } from "@store/selectors";
import { updateSearchTerm } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { Card } from "@atoms/card";
import { NoResults } from "@atoms/no-results";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import StyledSearchResultsList from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const SearchResultsList = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(selectSearchResults);

  const onCardClick = useCallback((id) => {
    dispatch(updateSearchTerm(""));
    navigate(`/post/${id}`);
  }, []);

  return (
    <StyledSearchResultsList className={cx([className, "th-search-results-list"])}>
      {posts.map((params, index) => (
        <Card key={`posts-search-results-post-${index}`} onClick={onCardClick} {...params} type="minimal" />
      ))}
      {!posts.length && <NoResults text="No results!" />}
    </StyledSearchResultsList>
  );
};

export default SearchResultsList;
