import React from "react";
import styled, { withTheme } from "styled-components";

const Button = styled.div`
    position: absolute;
    right: 25px;
    top: 25px;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: ${(props) => props.theme.themeChanger};
`;

const ThemeChanger = ({ theme, toggleTheme }) => (
    <Button theme={theme} onClick={toggleTheme}></Button>
);

export default withTheme(ThemeChanger);
