import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}

export const PrimaryButton: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <ButtonContainer activeOpacity={0.8} {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 14px 20px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.background};
  font-size: 16px;
 font-family: ${(props) => props.theme.fonts.bold};

`;
