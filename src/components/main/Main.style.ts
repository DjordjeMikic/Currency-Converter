import styled, { css } from 'styled-components';

import { Flex } from '../../Shared.style';

export const MainContainer = styled(Flex)<{ night: string }>`
  min-height: 35vh;
  width: 54%;

  ${({ night }) =>
    night &&
    css`
      border: 2px solid #3495eb;
      border-left: none;
      border-right: none;
    `}

  @media(max-width: 1024px) {
    width: 100%;
  }
`;

export const MainContent = styled(Flex)`
  width: 75%;
`;

export const InputContainer = styled(Flex)<{ rowmobile: string }>`
  width: 100%;
  align-items: flex-end !important;
  justify-content: space-between !important;
  padding: 0 16px;
  margin: 2% 0;

  @media (max-width: 1024px) {
    align-items: ${({ rowmobile }) => rowmobile && 'flex-start !important'};
    flex-direction: ${({ rowmobile }) => rowmobile && 'column !important'};

    input {
      width: 91%;
    }
  }
`;

export const Converted = styled(Flex)`
  align-items: flex-end !important;

  @media (max-width: 1024px) {
    margin-left: 4%;
  }
`;
