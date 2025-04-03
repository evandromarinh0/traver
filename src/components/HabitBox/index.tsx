import { useState } from "react";
import { Container, Title, IconsContainer, CheckIcon, EllipsisVerticalIcon, CheckIconContainer, EllipsisVerticalIconContainer } from "./styles";

interface HabitBoxProps {
  isChecked?: boolean;
}

const HabitBox = ({ isChecked }: HabitBoxProps) => {
  const [checkHabit, setCheckHabit] = useState(false);

  return (
    <Container isChecked={checkHabit}>
      <Title>Meditading</Title>

      <IconsContainer>
        <CheckIconContainer onPress={() => setCheckHabit(!checkHabit)} isChecked={checkHabit}>
          {isChecked ? <CheckIcon size={16} /> : <></>}
        </CheckIconContainer>

        <EllipsisVerticalIconContainer>
          <EllipsisVerticalIcon size={24} />
        </EllipsisVerticalIconContainer>
      </IconsContainer>
    </Container>
  );
};

export default HabitBox;
