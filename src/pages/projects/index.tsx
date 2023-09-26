import React from 'react';
import useGetRepositories from '../../hooks/useGetList';
import { Container } from './styles';

const Projects: React.FC = () => {
  const { repositories } = useGetRepositories()
  console.log("repositories", repositories)
  return (
    <Container>
      <h2>repositories</h2>
      <>
        <ul>
          {repositories?.map((item) => <li key={item.id}>{item?.name} - {item.language}</li>)}
        </ul>
      </>
    </Container>
  );
}

export default Projects