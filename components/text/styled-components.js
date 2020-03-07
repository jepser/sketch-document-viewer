import styled, { css } from 'styled-components';

export const Root = styled.span`
  line-height: normal;
  ${props => css`
    color: ${props.color || 'inherit'};
    font-size: ${`${props.size}px` || 'inherit'};
  `}
`;
