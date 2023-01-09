import { ViewProps } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Head, IconButton, Icon, Title, HeaderTypeStyleProps, HeaderTypeStyleSizeProps } from "./styles";

type Props = ViewProps & {
  title?: string;
  type: HeaderTypeStyleProps;
  size: HeaderTypeStyleSizeProps;
}

export function Header({ title, size, type, children }: Props){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack()
  }

  return(
    <Container size={size} type={type}>

      <Head >

        <IconButton onPress={handleGoBack}>
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