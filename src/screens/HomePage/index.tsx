import React from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";
import { lightTheme } from "../../theme";
import { useTheme } from "../../context/ThemeContext";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const ThemedText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: 20px;
`;

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <ThemedText>O tema atual é {theme === lightTheme ? "Claro" : "Escuro"}</ThemedText>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </Container>
  );
};

export default Home;
