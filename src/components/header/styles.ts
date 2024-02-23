import styled from "styled-components";

export const Container = styled.div`
  grid-area: H;

  //agora podemos chamar a nossa interface que criamos dentro do styled-components
  //mas antes precisamos ir no app e colocar no estilo global o tema que estamos usando no themeProvider
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};
`;
