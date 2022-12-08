import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Tag } from "@components/Tag";

import { Container, Form, MealName, DateHourTitle, Description, ButtonView } from "./styles";

type RouteParams = {
  mealName: string;
  mealDescription: string;
  dateMeal: string;
  hourMeal: string;
  isInsideDiet: boolean;
};

export function Meal({ mealName, mealDescription, dateMeal, hourMeal, isInsideDiet }: RouteParams){
  return(
    <Container isInsideDiet={isInsideDiet}>
      <Header size="SM" title="Refeição" type={isInsideDiet ? 'PRIMARY' : 'SECONDARY'}/>

      <Form>
        <MealName>
          {mealName}
        </MealName>
        <Description>
          {mealDescription}
        </Description>
        <DateHourTitle>
          Data e hora
        </DateHourTitle>
        <Description>
          {dateMeal} às {hourMeal}
        </Description>

        <Tag isInsideDiet={isInsideDiet} title={isInsideDiet ? "dentro da dieta" : "fora da dieta"}/>

        <ButtonView>
          <Button icon="edit-3" title="Editar refeição"/>
          <Button icon="trash-2" title="Excluir refeição" type="SECONDARY" style={{ marginTop: 9 }}/>
        </ButtonView>
      </Form>
    </Container>
  )
};