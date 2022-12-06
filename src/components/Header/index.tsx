import { ViewProps } from "react-native";
import { Container, Head, IconButton, Icon, Title, HeaderTypeStyleProps, HeaderTypeStyleSizeProps } from "./styles";

type Props = ViewProps & {
  title?: string;
  type: HeaderTypeStyleProps;
  size: HeaderTypeStyleSizeProps;
}

export function Header({ title, size, type, children }: Props){
  return(
    <Container size={size} type={type}>

      <Head >

        <IconButton>
          <Icon type={type}/>
        </IconButton>

        { title && 
          <Title>
            {title}
          </Title>
        }

      </Head>

      {children}

    </Container>
  )
}