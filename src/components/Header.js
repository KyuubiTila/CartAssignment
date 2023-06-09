import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';

export const Header = () => {
  const { cartList } = useCart();

  const activeClass =
    'text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white';
  const inactiveClass =
    'text-base block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

  // setting a dynamic value for the isActive function
  const isNavlinkActive = ({ isActive }) =>
    isActive ? activeClass : inactiveClass;
  return (
    <header>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                CartAssignment
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-between w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={isNavlinkActive} end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="cart" className={isNavlinkActive}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between w-full md:flex md:w-auto md:order-1">
            Cart: {cartList.length}
          </div>
        </div>
      </nav>
    </header>
  );
};
