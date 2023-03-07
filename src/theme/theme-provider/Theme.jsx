// -----------------------------------------------------------------------------
// Library and utils imports
// -----------------------------------------------------------------------------
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { variables } from './variables';

// -----------------------------------------------------------------------------
// Theme
// -----------------------------------------------------------------------------
const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors: variables.colors, responsive: variables.responsive }}>{children}</ThemeProvider>
  );
};

export default Theme;
