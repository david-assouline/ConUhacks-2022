import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colours: {
           country: string,
           countryClick: string,
           hoverCountry: string,
           borders: string,
           ocean: string
        }
    }
}