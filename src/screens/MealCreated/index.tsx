import { useCallback, useState } from "react";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";

import happyImg from '@assets/happy.png';
import sadImg from '@assets/sad.png';

import { Button } from "@components/Button";

import { Container, Title, Subtitle, Image } from "./styles";

type RouteParams = {
  isInsideDiet: boolean;
}

export function MealCreated(){
  const [title, setTitle] = useState<string>('Continue assim!');
  const [subtitlePartA, setSubtitlePartA] = useState<string>('Você continua ');
  const [subtitlePartB, setSubtitlePartB] = useState<string>('. Muito bem!');
  const [subtitlePartBold, setSubtitlePartBold] = useState<string>('dentro da dieta');

  const navigation = useNavigation();
  const route = useRoute();

  const { isInsideDiet } = route.params as RouteParams;

  function handleGoHome(){
    navigation.navigate('home');
  }
  
  function loadPageTexts(){
    if (!isInsideDiet){
      setTitle('Que pena!')
      setSubtitlePartA('Você ')
      setSubtitlePartB(' dessa vez, mas continue se esforçando e não desista!')
      setSubtitlePartBold('saiu da dieta')
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadPageTexts()
    }, [])
  )

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