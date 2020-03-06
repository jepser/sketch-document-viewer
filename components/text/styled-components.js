import styled, { css } from 'styled-components';

export const Root = styled.span`
  ${props => css`
    color: ${props.color || 'inherit'};
  `}
`;
