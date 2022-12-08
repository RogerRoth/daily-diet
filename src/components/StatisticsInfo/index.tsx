import { ViewProps } from "react-native";
import { Container, StatisticsInfoTypeStyleProps, StatisticsInfoTypeStyleSizeProps } from "./styles";

type Props = ViewProps & {
  type: StatisticsInfoTypeStyleProps;
  size?: StatisticsInfoTypeStyleSizeProps;
};

export function StatisticsInfo({ type, size = 'SM', children, ...rest }: Props) {
  return(
    <Container type={type} size={size} {...rest}>
      {children}
    </Container>
  )
};