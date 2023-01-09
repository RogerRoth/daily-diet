import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type MealStyleProps = {
  isInsideDiet: boolean;
};

export const Container = styled(SafeAreaView)<MealStyleProps>`
  flex: 1;
  background-color: ${({ theme, isInsideDiet }) => isInsideDiet ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`;

export const Form = styled.View`
  flex: 1;

  padding: 40px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MealName = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const DateHourTitle = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ButtonView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;