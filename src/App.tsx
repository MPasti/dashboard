import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Dashboard />
      <Layout />
    </>
  );
}

export default App;
