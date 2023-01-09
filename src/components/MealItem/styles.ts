import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type MealItemStyleProps = {
  isInsideOfDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  min-height: 49px;
  max-height: 49px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  padding: 0 16px;

  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
`;

export const Hour = styled.Text`
  width: 44px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Description = styled.Text`
  flex: 1;
  padding: 0 12px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const InsideOfDiet = styled(View)<MealItemStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isInsideOfDiet }) => isInsideOfDiet ? theme.COLORS.GREEN_350 : theme.COLORS.RED_350};
`;