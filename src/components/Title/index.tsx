import { Container, PrimaryText, SecondaryText } from "./styles";

interface TitleProps {
  title: string;
  hasSeeAll?: boolean
}

export function Title(props: TitleProps){
  return(
    <Container>
      <PrimaryText>{props.title}</PrimaryText>
      {props.hasSeeAll && <SecondaryText>See All</SecondaryText>}
    </Container>
  );
}