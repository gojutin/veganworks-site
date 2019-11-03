export interface Theme {
  font: {
    [key: string]: string;
  };
  colors: {
    [key: string]: string;
  };
}

const theme = {
  font: {
    cursive: "Satisfy, cursive",
  },
  colors: {
    purple: "#C711FC",
    lightblue: "#95D4FB",
  },
};

export { theme };
