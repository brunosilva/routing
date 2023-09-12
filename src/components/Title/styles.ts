import { styled } from "styled-components";

interface IProps {
  border: boolean;
}
export const Container = styled.div<IProps>`
  p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: ${(props: { border: boolean; }) => (props.border === true ? '1px solid rgba(var(--callout-border-rgb), 0.3)' : '0')};
    border-radius: ${(props: { border: boolean; }) => (props.border === true ? 'var(--border-radius)' : '0')};
  }
`;
