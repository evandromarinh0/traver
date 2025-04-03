import React from 'react';
import styled from 'styled-components/native';
import { ToggleThemeButton } from '../../components/ToggleThemeButton';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;


const Config = () => {

  return (
    <Container>
      <ToggleThemeButton />
    </Container>
  );
};

export default Config;
