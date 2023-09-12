import { ArrowRight } from '@phosphor-icons/react';
import { ContainerLink } from './styles';

interface IProps {
  path: string;
  label: string;
}

const Button: React.FC<IProps> = ({ path, label }) => {
  return (
    <ContainerLink>
      <a href={path}>
        <h2>
          {label} <ArrowRight size={30} />
        </h2>
      </a>
    </ContainerLink>
  );
}

export default Button