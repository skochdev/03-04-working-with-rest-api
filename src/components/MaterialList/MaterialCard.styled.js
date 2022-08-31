import styled from 'styled-components/macro';

export const MaterialItem = styled.li`
  & + & {
    margin-top: ${p => p.theme.space[4]}px;
  }
`;
