import { Container, Title, Subtitle, StatisticsTextTypeStyleProps } from './styles';

type Props = {
  title: string;
  subtitle: string;
  size?: StatisticsTextTypeStyleProps;
};

export function StatisticsText({ title, subtitle, size = 'XXL' }: Props) {
  return (
    <Container>
      <Title size={size}>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>

  )
};