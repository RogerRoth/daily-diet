import { View, Text } from 'react-native';
import styled, { css } from "styled-components/native";

export type TagStyleProps = {
  isInsideDiet: boolean;
}

export const Container = styled.View`
  flex-direction: row;

  height: 35px;
  padding: 0 16px;

  max-width: 144px;
  min-width: 127px;

  align-items: center;
  justify-content: flex-start;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
`;

export const Icon = styled(View)<TagStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${({ theme, isInsideDiet }) => isInsideDiet ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`;

export const Title = styled(Text).attrs(() => ({
  textTransform: 'lowercase',
}))`

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;