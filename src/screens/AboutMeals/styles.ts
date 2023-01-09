import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type AboutMealTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: AboutMealTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100 };
`;

export const Body = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  align-items: center;
`

export const Title = styled.Text`
  margin-top: 36px;
  margin-bottom: 23px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const StatisticsSmall = styled.View`
  flex: 2;
  flex-direction: row;

`