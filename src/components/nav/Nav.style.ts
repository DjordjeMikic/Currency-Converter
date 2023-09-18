import styled, { css } from 'styled-components';

import { Flex } from '../../Shared.style';

export const NavContainer = styled(Flex)<{ night: boolean }>`  
  height: 71px;
  width: 100%;
  justify-content: flex-start !important;
  padding: 0 75px;
  color: #fafafa;
  background-color: ${({ night }) => night ? 'rgb(1,1,1)' : '#3495eb'};
  border-bottom: ${({ night }) => night && '1px solid #3495eb'};
  position: absolute;
  top: 0;
  left: 0;

  h1 {
    font-size: 2.2rem;
  }

  @media (max-width: 1024px) {
    padding: 0 16px;
    
    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const SwitchContainer = styled(Flex)<{ left: boolean }>`
  height: 44px;
  width: 88px;
  justify-content: ${({ left }) => left ? 'flex-start !important' : 'flex-end !important'};
  background-color: ${({ left }) => left ? '#fafafa' : '#272727'};
  padding: 4px;
  border-radius: 22px;
  position: absolute;
  top: 50%;
  right: 75px;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    right: 16px;
  }
`;

export const SwitchSelector = styled.div`
  height: 100%;
  width: 50%;
  justify-content: flex-start !important;
  border-radius: 50%;
  background-color: #3495eb;
`;