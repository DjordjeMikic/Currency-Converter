import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const InputContainer = styled(Flex)`
  @media(max-width: 1024px) {
    align-items: flex-start !important;
    margin: 4% 0;
  }
`;

export const EText = styled.p`
  color: rgb(175, 0, 0);
`;

export const StyledField = `
  font-size: 1.75rem;
  padding: 6px;
  border: none;
  outline: none;
  border-bottom: 2px solid lightblue;
  margin-top: 2%;

  &:focus {
    outline: 1px solid lightblue;
    outline-bottom: none;
  }
`;

export const StyledInput = styled.input`${StyledField}`;
export const StyledSelect = styled.select`${StyledField}`;

export const CircleButtonContainer = styled.button`
  height: 75px;
  width: 75px;
  font-size: 1.75rem;
  padding: 9px;
  border: none;
  outline: none;
  border-radius: 50%;
  color: #fafafa;
  background-color: #3495eb;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1,1.1);
  }

  &:active {
    transform: scale(0.9,0.9);
  }

  p {
    height: 35%;
    line-height: 0.68;
  }
`;