export interface Theme {
  font: {
    [key: string]: string;
  };
  colors: {
    [key: string]: string;
  };
}

const theme = {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  font: {
    cursive: "Satisfy, cursive",
  },
  colors: {
    // Magenta-ish
    primary1: "#f9e7ff",
    primary2: "#eeb8fe",
    primary3: "#e388fe",
    primary4: "#d858fd",
    primary5: "#c711fc",
    primary6: "#9f0eca",
    primary7: "#770a97",
    primary8: "#500765",
    primary9: "#280332",
    // Sky Blue-ish
    secondary1: "#ebf1fa",
    secondary2: "#adc6eb",
    secondary3: "#85a9e0",
    secondary4: "#5c8dd6",
    secondary5: "#3370cc",
    secondary6: "#295aa3",
    secondary7: "#1f437a",
    secondary8: "#142d52",
    secondary9: "#091424",
    gray1: "#f2f2f2",
    gray2: "#cccccc",
    gray3: "#999999",
    gray4: "#808080",
    gray5: "#666666",
    gray6: "#4d4d4d",
    gray7: "#333333",
    gray8: "#1a1a1a",
    gray9: "#0d0d0d",
  },
};

export { theme };
