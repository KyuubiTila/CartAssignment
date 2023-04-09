import { Cartcard } from '../components';
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
import { getTotalFromCart } from '../utils';

export const Cart = () => {
  useTitle('Cart');
  const { cartList } = useCart();

  return (
    <div>
      <section>
        <h1 className="p-4 mb-4 text-2xl text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
          Cart Items : {cartList.length} / ${getTotalFromCart(cartList)}
        </h1>
        <div>
          {cartList.map((elements) => (
            <Cartcard key={elements.id} elements={elements} />
          ))}
        </div>
      </section>
    </div>
  );
};
