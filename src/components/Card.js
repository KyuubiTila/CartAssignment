import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export const Card = ({ elements }) => {
  const { addToCart, removeFromCart } = useCart();

  const blue =
    'text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
  const red =
    'text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';

  const [isAddedToCart, setIsAddedToCart] = useState(true);
  // const [buttonBackground, setButtonBackground] = useState(true);
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img className="rounded-t-lg" src={elements.image} alt="" />
        </Link>
        <div className="p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {elements.brand}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {elements.description}
          </p>
          <div className="flex  justify-between">
            <p>${elements.price}</p>

            <Link
              to="#"
              className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center ${
                isAddedToCart ? blue : red
              } `}
              onClick={() => {
                setIsAddedToCart(!isAddedToCart);
                isAddedToCart ? addToCart(elements) : removeFromCart(elements);
                // setButtonBackground(!buttonBackground);
              }}
            >
              {isAddedToCart ? 'Add to cart' : 'Remove'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
