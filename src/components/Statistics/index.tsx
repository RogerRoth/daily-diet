import { StatisticsText } from "@components/StatisticsText";
import { Container, StatisticsTypeStyleProps, Icon, IconView } from "./styles";

type Props = {
  title: string;
  subtitle: string;
  type?: StatisticsTypeStyleProps;
};

export function Statistics({ type='PRIMARY', subtitle, title}: Props){
  return(
    <Container type={type}>
      <IconView>
        <Icon 
          type={type}
        />
      </IconView>
      <StatisticsText title={title} subtitle={subtitle}/>
    </Container>
  )
};