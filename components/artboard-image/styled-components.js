import styled, { keyframes } from 'styled-components';
import { unitizedPx } from '@lib/layout-helpers';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100%;
  margin: 0 auto;
`;

export const Loading = styled.img`
  width: ${unitizedPx(4)};
  height: ${unitizedPx(4)};
  animation: ${rotate} 1s linear infinite;
`;
