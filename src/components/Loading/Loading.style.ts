import styled, { keyframes } from 'styled-components';

import { Flex } from '../../Shared.style';

export const LoadingContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  background-color: rgba(0,0,0.6);
  color: #3495eb;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }
  }
`;

export const AnimationContainer = styled(Flex)`
  height: 44vh;
  width: 35%;
  border-radius: 6px;
  background-color: inherit;
`;

export const Animation = styled.div`
  height: 75%;
  width: 100%;
  position: relative;
`;

const LoadingAnimation = keyframes`
  to { height: 6px; width: 6px; top: 9% }
`;

export const Circle = styled.div<{ item: number }>`
  height: 100%;
  width: 11px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotateZ(${({ item }) => (item - 1) * 45}deg);

  &::before {
    content: '';
    height: 11px;
    width: 11px;
    border-radius: 50%;
    background-color: #3495eb;
    position: absolute;
    top: 41%;
    animation-name: ${LoadingAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;