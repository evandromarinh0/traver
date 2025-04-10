import React, {useState} from 'react';
import styled from 'styled-components/native';
import {ToggleThemeButton} from '../../components/ToggleThemeButton';

import {DateCard} from '../../components/DateCard';
import {ArrowLeftIcon} from 'lucide-react-native';
import {useTheme} from '../../context/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import { ItemSeparator } from './styles';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const Habits = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  const dateArray: Date[] = Array.from({length: 10}, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  return (
    <Container>
      <ToggleThemeButton />
      <FlatList
        horizontal
        data={dateArray}
        renderItem={({item, index}) => {
          return <DateCard date={item} key={index}/>;
        }}
        ItemSeparatorComponent={ItemSeparator}
        />
      <ArrowLeftIcon
        color={theme.colors.text}
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
};

export default Habits;
