import { DefaultTheme } from "styled-components";

export const MainTheme: DefaultTheme = {
    colours: {
        buttons: {
            error: {
                background: "#EC4054",
                border: "#EC4054",
                text: "#f3f0f1",
            },
            warning: {
                background: "#FAD202",
                border: "#FAD202",
                text: "#1B264F",
            },
            success: {
                background: "#91BF3E",
                border: "#91BF3E",
                text: "#f3f0f1",
            },
            filled: {        
                background: "linear-gradient(to right, #007bff 2%, #1B34B6 128%)",
                border: "none",
                text: "#f3f0f1",
            },
            outlined: {
                background: "#fff",
                border: "#777777",
                text: "#777777",
            },

            hover: "0px 0px 4px 1px  grey"
        },
    },
    breakpoints: {
        breakpoint_xs: "0px",
        breakpoint_sm: "576px",
        breakpoint_md: "768px",
        breakpoint_lg: "992px",
        breakpoint_xl: "1200px",
    },
    font: {
        size: {
            inputs: "16px",
            regular: "16px",
            small: "14px",

            header: {
                primary: {
                    small: "20px",
                    large: "24px",
                },
                secondary: {
                    small: "18px",
                    large: "22px",
                }
            },
        },
        family: {
            header: "'Open Sans', sans-serif",
            body: "'Roboto', sans-serif",
            inputs: "'Roboto', sans-serif",
            companyName: "'Lobster', cursive",
        }
    }
}