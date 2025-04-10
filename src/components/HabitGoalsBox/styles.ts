import styled from 'styled-components/native';
import { Check, EllipsisVertical } from "lucide-react-native";

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  margin-top: 16px;
  background: ${props => props.theme.colors.secondaryBackground};

  padding: 12px;
  position: relative;
`;

export const GoalsText = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
`;

export const GoalsStageText = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text};
  margin-top: 8px;
`;

export const GoalsProgressBar = styled.View`
  width: 80%;
  margin-top: 8px;
  border-radius: 2px;
  background: ${props => props.theme.colors.border};
  height: 13px;

  overflow: hidden;
`;

export const GoalsCurrentProgressBar = styled.View<{width: number}>`
  width: ${props => props.width}%;
  height: 13px;
  border-radius: 2px;
  background: ${props => props.theme.colors.primary};
`;

export const GoalsOftenText = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.primary};
  margin-top: 8px;

`;


export const EllipsisVerticalIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const EllipsisVerticalIcon = styled(EllipsisVertical)`
  color: ${props => props.theme.colors.text};
`;
