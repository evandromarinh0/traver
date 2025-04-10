import { Container, GoalsText, GoalsOftenText, EllipsisVerticalIcon, EllipsisVerticalIconContainer, GoalsStageText, GoalsProgressBar, GoalsCurrentProgressBar } from "./styles";

interface HabitGoalsBoxProps {
  goalName: string;
  often: string;
  currentStep: number;
  totalSteps: number;
}

const HabitGoalsBox = (props: HabitGoalsBoxProps) => {
  const width = (props.currentStep / props.totalSteps) * 100;

  return (
    <Container>
      <GoalsText>{props.goalName}</GoalsText>

      <GoalsProgressBar>
        <GoalsCurrentProgressBar width={width} />
      </GoalsProgressBar>
    
      <GoalsStageText>{props.currentStep} from {props.totalSteps} days target</GoalsStageText>

      <GoalsOftenText>{props.often}</GoalsOftenText>

      <EllipsisVerticalIconContainer>
        <EllipsisVerticalIcon size={18} />
      </EllipsisVerticalIconContainer>
    </Container>
  );
};

export default HabitGoalsBox;
