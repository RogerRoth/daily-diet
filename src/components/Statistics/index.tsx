import { StatisticsText } from "@components/StatisticsText";
import { useNavigation } from '@react-navigation/native';
import { Container, StatisticsTypeStyleProps, Icon, IconView } from "./styles";

export type StatisticsType = StatisticsTypeStyleProps;

type Props = {
  title: string;
  subtitle: string;
  type?: StatisticsTypeStyleProps;
};

export function Statistics({ type='PRIMARY', subtitle, title}: Props){
  const navigation = useNavigation();

  function handleAboutMeals(){
    navigation.navigate('aboutMeals')
  }
  return(
    <Container type={type} onPress={handleAboutMeals}>
      <IconView>
        <Icon 
          type={type}
        />
      </IconView>
      <StatisticsText title={title} subtitle={subtitle}/>
    </Container>
  )
};