import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import styled, { css } from 'styled-components/native';

export type MealCreatedStyleProps = {
  isInsideDiet: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)<MealCreatedStyleProps>`
  text-align: center;
  margin-bottom: 8px;

  ${({ theme, isInsideDiet }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${isInsideDiet ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Image = styled.Image`
  padding-left: 75px;
  padding-right: 75px;

  margin-top: 40px;

  margin-bottom: 32px;
`