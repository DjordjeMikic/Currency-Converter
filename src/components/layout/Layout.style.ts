import styled, { css } from 'styled-components';
import { Flex } from '../../Shared.style';

export const LayoutContainer = styled(Flex)<{ night: boolean }>`
  height: 100vh;
  width: 100%;
  position: relative;

  ${({ night }) => night && css`
    background-color: rgb(1,1,1);
    color: #fafafa;
  `}
`;