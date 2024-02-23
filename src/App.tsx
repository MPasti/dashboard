import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/Dark";
//import light from "./styles/themes/Light";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Dashboard />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
