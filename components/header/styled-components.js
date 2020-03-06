import styled from 'styled-components';
import { unitizedPx } from '@lib/layout-helpers';
import { colors } from '@constants';

export const Root = styled.header`
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  background-color: white;
`;

export const Separator = styled.div`
  height: ${unitizedPx(2)};
  border-left: 1px solid ${colors.lightGrey};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;
