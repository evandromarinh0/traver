import styled from 'styled-components/native';


export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: row;
  padding: 0 16px;
`;


export const PrimaryText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
  font-size: 20px;
`;

export const SecondaryText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
  margin-right: 8px;
`;