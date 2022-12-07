import { Container, Title, Subtitle, Image } from "./styles";

import happyImg from '@assets/happy.png';
import { Button } from "@components/Button";

export function MealCreated(){
  return(
    <Container>
      <Title >
        Continue assim!
      </Title>
      <Subtitle>
        Você continua dentro da dieta. Muito bem!
      </Subtitle>

      <Image source={happyImg}/>

      <Button title="Ir para a página inicial"/>
    </Container>
  )
}