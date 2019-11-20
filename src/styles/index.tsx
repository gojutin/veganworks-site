import React, { useContext } from "react";
import {
  ThemeProvider as SCThemeProvider,
  ThemeContext,
} from "styled-components";
export { GlobalStyles } from "./global-styles";
import media from "use-media";
import { theme as themeObject } from "./theme";
type DefaultThemeObject = Omit<typeof themeObject, "screens"> & {
  screens: {
    [key: string]: number;
  };
};
const ThemeProvider: React.FC = ({ children }) => {
  const { screens, ...themeValues }: DefaultThemeObject = themeObject;
  const breakpointSizes = Object.keys(screens).reduce((accum, key: string) => {
    const value = media({ maxWidth: screens[key] });
    return {
      ...accum,
      [key]: value,
    };
  }, {});
  const theme = {
    ...themeValues,
    screens: breakpointSizes,
  };
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};
const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
