import { Container } from './styles';

interface IProps {
  border: boolean;
  label: string;
}

const Title: React.FC<IProps> = ({ border, label }) => {
  return (
    <Container border={border}>
      <p>
        {label}
      </p>
    </Container>
  );
}

export default Title