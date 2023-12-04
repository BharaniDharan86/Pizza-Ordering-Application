import { useNavigate } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>%MESSAGE%</p>
      <LinkButton to={-1}>Go Back</LinkButton>

      
    </div>
  );
}

export default NotFound;
