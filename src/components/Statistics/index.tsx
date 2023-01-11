import { StatisticsText } from "@components/StatisticsText";
import { Container, StatisticsTypeStyleProps, Icon, IconView } from "./styles";

export type StatisticsType = StatisticsTypeStyleProps;

type Props = {
  title: string;
  subtitle: string;
  type?: StatisticsTypeStyleProps;
  onEnter: () => void;
};

export function Statistics({ type='PRIMARY', subtitle, title, onEnter}: Props){
  return(
    <Container type={type} onPress={onEnter}>
      <IconView>
        <Icon 
          type={type}
        />
      </IconView>
      <StatisticsText title={title} subtitle={subtitle}/>
    </Container>
  )
};