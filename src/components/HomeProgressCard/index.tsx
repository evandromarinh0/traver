import {ImageBackground} from 'react-native';
import ProgressCircle from '../ProgressCircle';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

interface HomeProgressCard {
  progress: number;
  completedHabits: number;
  totalHabits: number;
}

export const HabitProgressCard: React.FC<HomeProgressCard> = ({
  progress,
  completedHabits,
  totalHabits,
}) => {
  const {t} = useTranslation();

  const text = t('habits_completed', {
    count: completedHabits,
    total: totalHabits,
  });
  return (
    <ImageBackground
      source={require('../../../assets/images/HomeCardBackground.png')}
      resizeMode="cover"
      style={{borderRadius: 32}}
      imageStyle={{borderRadius: 8}}>
      <Content>
        <ProgressCircle progress={progress} strokeWidth={12}/>
        <TextContainer>
          <HabitText>{text}</HabitText>
        </TextContainer>
      </Content>
    </ImageBackground>
  );
};

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 32px;
  padding-vertical: 24px;
`;

const TextContainer = styled.Text`
  font-size: 14px;
  font-family: ${props => props.theme.fonts.bold};
  text-align: center;
  color: #ffffff;
  margin-left: 16px;

`;

const HabitText = styled.Text`
  font-size: 16px;
  font-family: ${props => props.theme.fonts.bold};
  color: #ffffff;
  margin-left: 16px;
  text-align: left;
`;
