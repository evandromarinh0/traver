import styled from 'styled-components/native';
import { Check, EllipsisVertical } from "lucide-react-native";
import { css } from 'styled-components';


export const Container = styled.View<{ isChecked?: boolean }>`
  width: 100%;
  height: 58px;
  border-radius: 8px;
  margin-top: 16px;
  background: ${props => props.isChecked ? props.theme.colors.habitBox : props.theme.colors.secondaryBackground };

  padding: 0 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckIconContainer = styled.TouchableOpacity<{ isChecked?: boolean }>`
  height: 30px;
  width: 30px;
  margin-right: 4px;
  border-color: ${props => props.theme.colors.text};
  border-width: 2px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  ${props => props.isChecked && css`
    background: ${props => props.theme.colors.habitCheckBox};
    border-width: 0px;
  `}
`;

export const CheckIcon = styled(Check)`
  color: #fff;
`;

export const EllipsisVerticalIconContainer = styled.TouchableOpacity``;

export const EllipsisVerticalIcon = styled(EllipsisVertical)`
  color: ${props => props.theme.colors.text};
`;
