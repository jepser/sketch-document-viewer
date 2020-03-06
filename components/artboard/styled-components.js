import styled from 'styled-components';
import { colors } from '@constants';
import { unitizedPx } from '@lib/layout-helpers';

export const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  flex-grow: 1;
  flex-basis: 240px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-height: ${unitizedPx(40)};
  max-width: 100%;
  margin: 0 auto;
`;

export const Caption = styled.p`
  color: ${colors.midGrey};
  font-size: 12px;
  text-align: center;
  align-self: center;
`;

export const Content = styled.div`
  flex: 0 0 240px;
`;
