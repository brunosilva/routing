import { styled } from "styled-components";

export const ContainerAppSC = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeaderSC = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const ContainerBodySC = styled.div`
  padding: 1rem;
  background-color: rgba(var(--callout-rgb), 0.5);
  border: ${(props: { border: boolean; }) => (props.border === true ? '1px solid rgba(var(--callout-border-rgb), 0.3)' : '0')};
  border-radius: ${(props: { border: boolean; }) => (props.border === true ? 'var(--border-radius)' : '0')};
  height:500px;
  overflow-y: auto;
`;

