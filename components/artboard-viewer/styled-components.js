import styled from 'styled-components';
import { HEADER_HEIGHT } from '@constants';
import { unitizedPx } from '@lib/layout-helpers';

export const Root = styled.div`
  flex-grow: 1;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  /* sorry mom for my sins, this is a barbaric implementation */
  height: calc(100vh - ${unitizedPx(14)});
`;
