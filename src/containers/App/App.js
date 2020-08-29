import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Todo from "../Todo/Todo";
import Footer from "../../components/Footer/Footer";
import ThemeChanger from "../../components/ThemeChanger/ThemeChanger";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme/theme";
import { GlobalStyles } from "../../theme/global";

const Title = styled.h1`
    margin: 0;
    text-align: center;
    font-size: 90px;
    color: ${({ theme }) => theme.title};
    font-weight: 400;
    margin-bottom: 30px;
`;

const Wrap = styled.div`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme === "dark") {
            localTheme && setTheme("dark");
        } else {
            localTheme && setTheme("light");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <GlobalStyles />
            <Wrap>
                <ThemeChanger toggleTheme={toggleTheme} />
                <Title>todo app</Title>
                <Todo />
                <Footer />
            </Wrap>
        </ThemeProvider>
    );
}

export default App;
