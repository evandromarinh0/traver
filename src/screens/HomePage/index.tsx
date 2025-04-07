import React, {useState} from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';
import {HabitProgressCard} from '../../components/HomeProgressCard';
import {ToggleThemeButton} from '../../components/ToggleThemeButton';
import HabitBox from '../../components/HabitBox';
import {AddHabitModal} from '../../components/AddHabitModal';
import { PrimaryButton } from '../../components/PrimaryButton';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const ThemedText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
`;

const Home = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Container>
      <ToggleThemeButton />
      <Header name={'luana'} />
      <HabitProgressCard progress={70} completedHabits={3} totalHabits={5} />
      <HabitBox isChecked />
      <AddHabitModal
        visible={visible}
        setVisible={setVisible}
        onSubmit={() => setVisible(false)}
      />
      <PrimaryButton title={"Add habit"} onPress={() => setVisible(true)}/>
    </Container>
  );
};

export default Home;
