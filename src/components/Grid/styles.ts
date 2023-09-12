import { styled } from "styled-components";

export const GridSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(15%, auto));
  max-width: 40%;
  width: var(--max-width);
`;
