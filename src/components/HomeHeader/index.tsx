import { Container, Logo, UserImage } from "./styles";

import logoImg from '@assets/logo.png';

type Props = {
  userImageUrl: string;
};

export function HomeHeader({ userImageUrl }: Props) {
  return (
    <Container>
      <Logo source={logoImg} />
      <UserImage source={{ uri: userImageUrl }} />
    </Container>
  )
};