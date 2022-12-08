import styled, {css} from "styled-components/native";

export type StatisticsTextTypeStyleProps = 'XL' | 'XXL';

type Props = {
  size: StatisticsTextTypeStyleProps
};

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text<Props>`
  text-align: center;

  ${({ theme, size }) => css`
    font-size: ${ size === 'XL' ? theme.FONT_SIZE.XL : theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
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