import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type StatisticsInfoTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
export type StatisticsInfoTypeStyleSizeProps = 'SM' | 'MD';

type Props = {
  type: StatisticsInfoTypeStyleProps;
  size: StatisticsInfoTypeStyleSizeProps;
}

export const Container = styled(View)<Props>`
  flex: 1;
  width: 100%;

  
  padding: 16px;
  border-radius: 8px;
  
  margin-bottom: 12px;
  
  align-items: center;
  justify-content: center;
  
  ${({ theme, type, size }) => css`
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GREEN_100 : type === 'SECONDARY' ? theme.COLORS.RED_100 : theme.COLORS.GRAY_600 };
    min-height: ${ size === 'SM' ? 89 : 107 }px;
    max-height: ${ size === 'SM' ? 89 : 107 }px;
  `}
`;