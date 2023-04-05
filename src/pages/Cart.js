import { Cartcard } from '../components';
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  useTitle('Cart');
  const { total, cartList } = useCart();
  console.log(cartList);

  return (
    <div>
      <section>
        <h1 className="p-4 mb-4 text-2xl text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
          Cart Items : {cartList.length} / ${total}
        </h1>
        <div flex space-x-4 space-y-4>
          {cartList.map((elements) => (
            <Cartcard key={elements.id} elements={elements} />
          ))}
        </div>
      </section>
    </div>
  );
};
