export const getColors = (darkMode) => {
  return darkMode
    ? {
        bg: "#121212",
        text: "#ffffff",
        card: "#1e1e1e",
      }
    : {
        bg: "#ffffff",
        text: "#000000",
        card: "#f2f2f2",
      };
};