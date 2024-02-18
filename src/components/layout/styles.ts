import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;

  //H = Header
  //CT = Content
  //AS = Aside
  grid-template-areas: "AS H" "AS CT";

  height: 100vh;
`;
