import { ButtonScheme, ButtonSize } from "@/style/theme";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
}

export default function Button({children, size, scheme}: Props) {
    return <ButtonStyle size={size} scheme={scheme}>{children}</ButtonStyle>;
}

const ButtonStyle = styled.button<Omit<Props, 'children'>>`
    font-size: ${({theme, size}) => theme.button[size].fontSize};
    padding: ${({theme, size}) => theme.button[size].padding};
    color: ${({theme, scheme}) => theme.buttonScheme[scheme].color};
    background-color: ${({theme, scheme}) => theme.buttonScheme[scheme].backgroundColor};
    border: none;
    border-radius: 5px;
`;