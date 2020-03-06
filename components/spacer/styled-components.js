import styled, { css } from 'styled-components';
import { unitizedPx } from '@lib/layout-helpers';

const baseStyles = ({ top, left, right, bottom }) => css`
  margin-top: ${parseInt(top) >= 0 ? unitizedPx(top) : null};
  margin-right: ${parseInt(right) >= 0 ? unitizedPx(right) : null};
  margin-bottom: ${parseInt(bottom) >= 0 ? unitizedPx(bottom) : null};
  margin-left: ${parseInt(left) >= 0 ? unitizedPx(left) : null};
`;

export const Root = styled.div`
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  ${baseStyles};
`;
