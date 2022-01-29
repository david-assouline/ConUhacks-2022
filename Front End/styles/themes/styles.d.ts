import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colours: {
            buttons: {
                error: ButtonStyles,
                warning: ButtonStyles,
                success: ButtonStyles,
                filled: ButtonStyles,
                outlined: ButtonStyles,
                hover: string,
            }
        },
        breakpoints: {
            breakpoint_xs: string,
            breakpoint_sm: string,
            breakpoint_md: string,
            breakpoint_lg: string,
            breakpoint_xl: string,
        },
        font: {
            size: {
                inputs: string,
                regular: string,
                small: string,

                header: {
                    primary: {
                        small: string,//?change to regular?
                        large: string,
                    },
                    secondary: {
                        small: string, //?change to regular?
                        large: string,
                    }
                },
            },
            
            family: {
                header: string,
                body: string,
                inputs: string,
                companyName: string,
            }
        }
    }
}