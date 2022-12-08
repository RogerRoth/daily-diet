import styled, { css } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';

export type HeaderTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

export type HeaderTypeStyleSizeProps = 'SM' | 'MD';

type Props = {
  type: HeaderTypeStyleProps;
  size: HeaderTypeStyleSizeProps;
};

export const Container = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : type === 'SECONDARY' ? theme.COLORS.RED_100 : theme.COLORS.GRAY_500 };
  height: ${({ size }) => size === 'MD' ? 108 : 44}px;
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: -12px;
`;

export const IconButton = styled.TouchableOpacity`
  width: 56px;
  height: 30px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  padding-right: 56px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : type === 'SECONDARY' ? theme.COLORS.RED_700 : theme.COLORS.GRAY_200,
}))``;


