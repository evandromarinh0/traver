import { Container, PrimaryText, SecondaryText } from "./styles";

interface TitleProps {
  title: string;
  onPress?: () => void;
}

export function Title(props: TitleProps){
  return(
    <Container>
      <PrimaryText>{props.title}</PrimaryText>
      {props.onPress && <SecondaryText onPress={props.onPress}>See All</SecondaryText>}
    </Container>
  );
}