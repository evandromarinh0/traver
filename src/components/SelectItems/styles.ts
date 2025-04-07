import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color:  ${(props) => props.theme.colors.text};
  margin-bottom: 4px;
`;

export const SelectButton = styled.TouchableOpacity`
  background-color: #eeeeee;
  border-radius: 8px;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectedText = styled.Text`
  font-size: 16px;
  color: #2f2f2f;
`;

export const Dropdown = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  elevation: 3;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-offset: 0px 2px;
  shadow-radius: 4px;
  margin-top: 4px;
`;

export const DropdownItem = styled.TouchableOpacity`
  padding: 12px 16px;
`;

export const DropdownText = styled.Text`
  font-size: 16px;
  color: #2f2f2f;
`;
