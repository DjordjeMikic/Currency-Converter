import styled from 'styled-components';

import { Flex } from '../../Shared.style';

export const FooterContainer = styled(Flex)`
  width: 100%;
  padding: 16px 0;
  border-top: 1px solid #3495eb;
  letter-spacing: 2px;
  position: absolute;
  left: 0;
  bottom: 0;

  p {
    color: #3495eb;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
`