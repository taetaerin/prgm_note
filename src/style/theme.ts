export type ColorKey = "primaryColor" | "secondaryColor" | "hoverColor" | "border";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary";

interface Theme {
    color: Record<ColorKey, string>;
    heading: {
        [key in HeadingSize]: {
            fontSize: string;
        };
    };
    button: {
        [key in ButtonSize]: {
            fontSize: string;
            padding: string;
            borderRadius?: string;
        };
    };
    buttonScheme: {
        [key in ButtonScheme]: {
            color: string;
            backgroundColor: string;
        };
    };
    layout: {
        width: {
            normal: string;
        }
    }
}

export const theme: Theme = {
    color: {
        primaryColor: "black",
        secondaryColor: "red",
        hoverColor: "#0D1054",
        border: "#929292",
    },
    heading: {
        large: {
            fontSize: "3rem",
        },
        medium: {
            fontSize: "1.5rem",
        },
        small: {
            fontSize: "1rem",
        },
    },
    button: {
        large: {
            fontSize: "1.5rem",
            padding: "1rem 2rem",
        },
        medium: {
            fontSize: "1rem",
            padding: "0.5rem 1rem",
        },
        small: {
            fontSize: "0.75rem",
            padding: "0.25rem 0.5rem",
        },
    },
    buttonScheme: {
        primary: {
            color: "white",
            backgroundColor: "#0D1054",
        },
    },
    layout: {
        width: {
            normal: '520px',
        }
    }
};
