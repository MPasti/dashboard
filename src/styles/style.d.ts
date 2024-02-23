//arquivo para sobrescrever tipos de arquivos
//estamos definindo as caracteristicas desse objeto de tema
//estamos criando essa tipagem para dentro do styled-components
//agora isso está disponível para uso
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;
    };
  }
}
