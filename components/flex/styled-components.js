import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  ${({ direction, align, justify, wrap }) => css`
    flex-direction: ${direction || 'row'};
    align-items: ${align || 'normal'};
    justify-content: ${justify || 'normal'};
    flex-wrap: ${wrap || 'wrap'};
  `}
`;

export const FlexChild = styled.div``;
