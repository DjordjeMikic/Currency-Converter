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