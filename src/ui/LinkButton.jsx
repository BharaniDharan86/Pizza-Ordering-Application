/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';

const className = 'text-blue-400  hover:text-blue-700 hover:underline';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === -1)
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
