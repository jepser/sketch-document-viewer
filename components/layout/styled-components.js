import styled from 'styled-components';
import { colors } from '@constants';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px 0; /* this is so the overflow from margins stay inside */
  min-height: 100vh;
  background-color: ${colors.lightGrey};
`;
