import styled from 'styled-components';
import { color, layout, typography, flexbox, position } from 'styled-system';

// This is a default reusable box

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  color,
  layout,
  typography,
  flexbox,
  position
);
