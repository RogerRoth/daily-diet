import { Header } from "@components/Header";
import { StatisticsInfo } from "@components/StatisticsInfo";
import { StatisticsText } from "@components/StatisticsText";
import { Container, Body, Title, StatisticsSmall, AboutMealTypeStyleProps } from "./styles";

export function AboutMeals(){
  return( 
    <Container type="PRIMARY">
      <Header type="PRIMARY" size="MD"> 
        <StatisticsText title="90,86%" subtitle="das refeições dentro da dieta"/>
      </Header>

      <Body>
        <Title>
          Estatísticas gerais
        </Title>

        <StatisticsInfo type="TERTIARY">
          <StatisticsText title="22" subtitle="melhor sequência de pratos dentro da dieta" size="XL"/>
        </StatisticsInfo>

        <StatisticsInfo type="TERTIARY">
          <StatisticsText title="109" subtitle="refeições registradas" size="XL"/>
        </StatisticsInfo>

        <StatisticsSmall>

          <StatisticsInfo type="PRIMARY" size="MD">
            <StatisticsText title="99" subtitle="refeições dentro da dieta" size="XL"/>
          </StatisticsInfo>

          <StatisticsInfo type="SECONDARY" style={{ marginLeft: 12 }} size="MD">
            <StatisticsText title="10" subtitle="refeições fora da dieta" size="XL"/>
          </StatisticsInfo>

        </StatisticsSmall>
      </Body>
    </Container>
    
  )
}