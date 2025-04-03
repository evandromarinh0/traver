import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  background-color: ${props => props.theme.colors.background};
  padding: 20px;
  align-items: center;
`;

const DateText = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
  font-size: 14px;
`;

const Greeting = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
`;

const Highlight = styled.Text`
  color: ${props => props.theme.colors.primary};
`;

interface HeaderProps {
  name: string;
}

const Header = ({name}: HeaderProps) => {
  const {t} = useTranslation();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <HeaderContainer>
      <DateText>{t('date_format', {date: formattedDate})}</DateText>
      <Greeting>
        {t('welcome')}, <Highlight>{name}</Highlight>!
      </Greeting>
    </HeaderContainer>
  );
};

export default Header;
