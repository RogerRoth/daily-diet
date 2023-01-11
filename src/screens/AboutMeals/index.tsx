import { useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { StatisticsInfo } from "@components/StatisticsInfo";
import { StatisticsText } from "@components/StatisticsText";

import { Container, Body, Title, StatisticsSmall, AboutMealTypeStyleProps } from "./styles";

type RouteParams = {
  mealsPercentage: string;
  statisticsType: AboutMealTypeStyleProps;
  mealsBestSequence: number;
  mealsTotalCount: number;
  mealsInDietCount: number;
  mealsOutDietCount: number;
};

export function AboutMeals(){
  const route = useRoute();

  const { mealsPercentage, statisticsType, mealsBestSequence, mealsInDietCount, mealsOutDietCount, mealsTotalCount } = route.params as RouteParams;

  return( 
    <Container type={statisticsType}>
      <Header type={statisticsType} size="MD"> 
        <StatisticsText title={mealsPercentage} subtitle="das refeições dentro da dieta"/>
      </Header>

      <Body>
        <Title>
          Estatísticas gerais
        </Title>

        <StatisticsInfo type="TERTIARY">
          <StatisticsText title={mealsBestSequence.toString()} subtitle="melhor sequência de pratos dentro da dieta" size="XL"/>
        </StatisticsInfo>

        <StatisticsInfo type="TERTIARY">
          <StatisticsText title={mealsTotalCount.toString()} subtitle="refeições registradas" size="XL"/>
        </StatisticsInfo>

        <StatisticsSmall>

          <StatisticsInfo type="PRIMARY" size="MD">
            <StatisticsText title={mealsInDietCount.toString()} subtitle="refeições dentro da dieta" size="XL"/>
          </StatisticsInfo>

          <StatisticsInfo type="SECONDARY" style={{ marginLeft: 12 }} size="MD">
            <StatisticsText title={mealsOutDietCount.toString()} subtitle="refeições fora da dieta" size="XL"/>
          </StatisticsInfo>

        </StatisticsSmall>
      </Body>
    </Container>
    
  )
}