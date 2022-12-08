import styled, { css } from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;

  min-height: 50px;
  max-height: 50px;

  padding: 0 24px;

  justify-content: center;
  align-items: center;
  border-radius: 6px;

  ${({ theme, type }) => type === 'PRIMARY' ? css`
    background-color: ${theme.COLORS.GRAY_200}
  ` : css`
    background-color: ${theme.COLORS.GRAY_700};
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Title = styled(Text)<Props>`
  ${({ theme, type }) => css`
    color: ${ type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))`
  padding-right: 16px;
`;
