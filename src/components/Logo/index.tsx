import reactLogo from '../../assets/react.svg';
import { ContainerLogo } from './styles';

const Logo: React.FC = () => {
  return (
    <ContainerLogo>
       <a href="/">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </ContainerLogo>
  );
}

export default Logo