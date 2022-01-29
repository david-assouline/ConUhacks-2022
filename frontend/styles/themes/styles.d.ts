import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colours: {
           country: string,
           countryClick: string,
           hoverCountry: string,
           borders: string,
           ocean: string,
           legend: {
            color1: string,
            color2: string,
            color3: string,
            color4: string,
            color5: string
          }
          toolOverlay: {
            backgroundColor: string,
            color: string,
            hover: string
          }
        }
    }
}