import error from '../assets/404 Error.gif';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex  flex-col justify-center items-center">
      <img src={error} loading="lazy" alt="" />
      <Link
        to={'/'}
        className="bg-gray-200 text-secondary-bg p-1 px-7 rounded-full"
      >
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
