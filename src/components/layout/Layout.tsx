import { Grid } from "./styles";

import Header from "../header/Header";
import Aside from "../aside/Aside";
import Content from "../content/Content";

const Layout = () => {
  return (
    <Grid>
      <Header />
      <Aside />
      <Content />
    </Grid>
  );
};

export default Layout;
