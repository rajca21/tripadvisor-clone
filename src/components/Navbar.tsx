import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex py-4 sm:pl-20 sm:justify-between items-center navbar flex-col sm:flex-row'>
      <Link to={'/'} className='flex items-center gap-2'>
        <img
          src={logo}
          className='w-10 h-10 bg-green-400 rounded-full'
          alt='logo'
        />
        <h1 className='font-bold text-2xl'>Tripadvisor</h1>
      </Link>
    </div>
  );
};

export default Navbar;
