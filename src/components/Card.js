import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const getButtonColor = (color) =>
  `bg-${color}-700  hover:bg-${color}-800 focus:ring-${color}-300 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`;

export const Card = ({ cartItem }) => {
  const { addToCart, removeFromCart, cartList } = useCart();

  const isAddedToCart = cartList.findIndex(({ id }) => id === cartItem.id) > -1;

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img className="rounded-t-lg" src={cartItem.image} alt="" />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {cartItem.brand}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {cartItem.description}
          </p>
          <div className="flex  justify-between">
            <p>${cartItem.price}</p>

            <Link
              to="#"
              className={`inline-flex rounded-lg text-white  items-center px-3 py-2 text-sm font-medium text-center focus:ring-4 focus:outline-none ${getButtonColor(
                isAddedToCart ? 'red' : 'blue'
              )} `}
              onClick={() => {
                isAddedToCart ? removeFromCart(cartItem) : addToCart(cartItem);
              }}
            >
              {isAddedToCart ? 'Remove' : 'Add to cart'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
