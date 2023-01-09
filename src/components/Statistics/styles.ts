import styled from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native';

export type StatisticsTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: StatisticsTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: 20px 16px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  border-radius: 8px;
  margin: 32px 0;
`;

export const IconView = styled.View`
  position: absolute;
  align-self: flex-end;
  padding: 13px;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700
}))``;
