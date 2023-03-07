// -----------------------------------------------------------------------------
// Libraries
// -----------------------------------------------------------------------------
import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

// -----------------------------------------------------------------------------
// Store
// -----------------------------------------------------------------------------
import { updateSearchTerm } from "@store/slices/app-state/app-state-slice";

// -----------------------------------------------------------------------------
// Components
// -----------------------------------------------------------------------------
import { TextInput } from "@atoms/text-input";
import { FilledButton } from "@atoms/filled-button";

// -----------------------------------------------------------------------------
// Styles, helpers and assets
// -----------------------------------------------------------------------------
import { variables } from "@theme/theme-provider/variables";
import StyledSearch from "./style";

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------
const Search = () => {
  const dispatch = useDispatch();

  const onKeyDown = useCallback((event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
    }
  }, []);

  const onClick = useCallback(() => {
    console.log("click");
  }, []);

  const onSearchTermChange = useCallback((event) => {
    dispatch(updateSearchTerm(event.target.value));
  }, []);

  const onChange = useMemo(() => debounce(onSearchTermChange, 400), [onSearchTermChange]);

  return (
    <StyledSearch className="th-search">
      <TextInput label="SEARCH THE SITE" onKeyDown={onKeyDown} onChange={onChange} />
      <FilledButton
        backgroundColor={variables.colors.tenn}
        color={variables.colors.white}
        hoverBackgroundColor={variables.colors.richGold}
        onClick={onClick}
      >
        SEARCH
      </FilledButton>
    </StyledSearch>
  );
};

export default Search;
