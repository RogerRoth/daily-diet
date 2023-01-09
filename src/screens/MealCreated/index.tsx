import { useRoute, useNavigation } from "@react-navigation/native";
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

export function MealCreated(){
  const navigation = useNavigation();
  const route = useRoute();

  const { title, isInsideDiet, subtitlePartA, subtitlePartB, subtitlePartBold } = route.params as RouteParams;

  function handleGoHome(){
    navigation.navigate('home');
  }

  return(
    <Container>
      <Title isInsideDiet={isInsideDiet}>
        {title}
      </Title>
      <Subtitle>
        {subtitlePartA}<Subtitle style={{ fontWeight: 'bold'}}>{subtitlePartBold}</Subtitle>{subtitlePartB}
      </Subtitle>

      <Image source={isInsideDiet ? happyImg : sadImg}/>

      <Button title="Ir para a página inicial" onPress={handleGoHome}/>
    </Container>
  )
}