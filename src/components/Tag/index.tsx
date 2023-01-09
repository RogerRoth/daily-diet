import { Container, Icon, Title, TagStyleProps } from "./styles";

type Props = TagStyleProps & {
  title: string;
}

export function Tag({ title, isInsideDiet}: Props){
  return(
    <Container>
      <Icon isInsideDiet={isInsideDiet}/>
      <Title>
        {title}
      </Title>
    </Container>
  )
}