import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,<ThemeProvider theme={}>
  
</ThemeProvider>import { ThemeProvider } from "@emotion/react";
 } from "@mui/material";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        </ThemeProvider>

    <div className="App">
      <main className = "content"></main>
    </div>
    <ThemeProvider/>
    </ColorModeContext.Provider>
  );
}

export default App;
