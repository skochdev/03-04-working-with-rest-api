import styled from 'styled-components/macro';

export const MaterialCard = styled.div`
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders[1]};
  width: auto;
`;

export const Title = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Link = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Button = styled.button`
  border: none;
  background-color: ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;

  & + & {
    margin-left: ${p => p.theme.space[4]}px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.primary};
  }
`;
