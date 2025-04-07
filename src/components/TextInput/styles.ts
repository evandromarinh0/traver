import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color:  ${(props) => props.theme.colors.text};
  margin-bottom: 6px;  
   font-family: ${(props) => props.theme.fonts.bold};

`;

export const StyledTextInput = styled.TextInput`
  height: 45px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 0 12px;
 background-color: ${(props) => props.theme.colors.background};
  font-size: 16px;
  color:  ${(props) => props.theme.colors.text};
     font-family: ${(props) => props.theme.fonts.bold};
`;