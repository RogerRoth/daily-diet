import { TextInput, View } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import styled, { css } from "styled-components/native";

export type InputSizeStyleProps = 'MD' | 'LG';

type Props = {
  size: InputSizeStyleProps;
};

export const Container = styled(View)<Props>`
  flex: 1;
  margin-bottom: 24px;
  ${({ size }) => css`
    min-height: ${size === 'MD' ? 70 : 142}px;
    max-height: ${size === 'MD' ? 70 : 142}px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const InputCustom = styled(TextInput)<Props>`
  border-radius: 6px;
  padding: 14px;
  margin-top: 4px;
  ${({ theme, size }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    color: ${theme.COLORS.GRAY_100};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    min-height: ${size === 'MD' ? 48 : 120}px;
    max-height: ${size === 'MD' ? 48 : 120}px;
  `}
`;