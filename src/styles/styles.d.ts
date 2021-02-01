  
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
      inputBackgroundColor:string;
      inputBorderColor:string;
      inputTextColor:string;
      buttonBackgroundColor:string;
      backgroundCardColor:string;
      backgroundShadeCard:string;

    }
  }
}