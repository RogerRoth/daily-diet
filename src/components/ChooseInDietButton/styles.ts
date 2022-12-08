import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type ChooseInDietProps = {
  isActive?: boolean;
  type?: 'PRIMARY' | 'SECONDARY';
};

export const Container = styled(TouchableOpacity)<ChooseInDietProps>`
  ${({ theme, isActive, type }) => isActive && css`
    border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  `};
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex-direction: row;

  border-radius: 6px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Icon = styled(View)<ChooseInDietProps>`
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700 };
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-right: 8px;
`;