import { createSelector } from "@reduxjs/toolkit";
import selectAppStateRaw from "./select-app-state-raw";

export default createSelector(selectAppStateRaw, ({ setSearchTerm }) => setSearchTerm);
