import { Container, Title, Subtitle, Image } from "./styles";

import happyImg from '@assets/happy.png';
import sadImg from '@assets/sad.png';
import { Button } from "@components/Button";

type RouteParams = {
  title: string;
  subtitlePartA: string;
  subtitlePartB: string;
  subtitlePartBold: string;
  isInsideDiet: boolean;
}

export function MealCreated({title, isInsideDiet, subtitlePartA, subtitlePartB, subtitlePartBold}: RouteParams){
  return(
    <Container>
      <Title isInsideDiet={isInsideDiet}>
        {title}
      </Title>
      <Subtitle>
        {subtitlePartA}<Subtitle style={{ fontWeight: 'bold'}}>{subtitlePartBold}</Subtitle>{subtitlePartB}
      </Subtitle>

      <Image source={isInsideDiet ? happyImg : sadImg}/>

      <Button title="Ir para a página inicial"/>
    </Container>
  )
}