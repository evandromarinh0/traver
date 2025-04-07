import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  margin: 16px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.background};
`;

export const TextContainer = styled.View`
  padding: 8px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.border};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.bold};
  margin-bottom: 6px;
`;

export const Backdrop = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
