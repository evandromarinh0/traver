import {X} from 'lucide-react-native';
import {Modal} from 'react-native';
import {Backdrop, Container, TextContainer, Title} from './styles';
import {TextInput} from '../TextInput';
import React, {useState} from 'react';
import SelectItems from '../SelectItems';
import {PrimaryButton} from '../PrimaryButton';
import {t} from 'i18next';
import {useTheme} from '../../context/ThemeContext';

type HabitFormValues = {
  goal: string;
  habit: string;
  selectedHabit: {
    key: string;
    title: string;
  };
  selectedPeriod: {
    key: string;
    title: string;
  };
};

interface AddHabitModalProps {
  visible: boolean;
  setVisible: (v: boolean) => void;
  onSubmit: (v: HabitFormValues) => void;
}

export const AddHabitModal = ({
  visible,
  setVisible,
  onSubmit,
}: AddHabitModalProps) => {
  const [goal, setGoal] = useState('');
  const [habit, setHabit] = useState('');
  const periodItems = [
    {key: '7', title: t(`periods.7`)},
    {key: '14', title: t(`periods.14`)},
    {key: '30', title: t(`periods.30`)},
    {key: '90', title: t(`periods.90`)},
  ];
  const habitTypes = [
    {key: 'everyday', title: t(`habitTypes.everyday`)},
    {key: 'weekdays', title: t(`habitTypes.weekdays`)},
    {key: 'weekends', title: t(`habitTypes.weekends`)},
    {key: 'custom_days', title: t(`habitTypes.custom_days`)},
    {key: 'once_a_week', title: t(`habitTypes.once_a_week`)},
    {key: 'twice_a_week', title: t(`habitTypes.twice_a_week`)},
    {key: 'monthly', title: t(`habitTypes.monthly`)},
  ];

  const [selectedPeriod, setSelectedPeriod] = useState(periodItems[0]);
  const [selectedHabit, setSelectedHabit] = useState(habitTypes[0]);
  const {theme} = useTheme();
  return (
    <Modal visible={visible} transparent={true}>
      <Backdrop>
        <Container>
          <TextContainer>
            <Title>{t('createHabitTitle')}</Title>
            <X onPress={() => setVisible(!visible)} color={theme.colors.text} />
          </TextContainer>
          <TextInput
            label={t('yourGoal')}
            value={goal}
            onChangeText={setGoal}
            placeholder={t('yourGoalPlaceholder')}
          />
          <TextInput
            label={t('habitName')}
            value={habit}
            onChangeText={setHabit}
            placeholder={t('habitNamePlaceholder')}
          />
          <SelectItems
            label={t('period')}
            items={periodItems}
            selectedKey={selectedPeriod.key}
            onSelect={setSelectedPeriod}
          />
          <SelectItems
            label={t('habitType')}
            items={habitTypes}
            selectedKey={selectedHabit.key}
            onSelect={setSelectedHabit}
          />
          <PrimaryButton
            title={t('createNew')}
            onPress={() =>
              onSubmit({
                goal,
                habit,
                selectedHabit,
                selectedPeriod,
              })
            }
          />
        </Container>
      </Backdrop>
    </Modal>
  );
};
