import { useCart } from '../context/CartContext';
import { useTitle } from '../hooks/useTitle';
import React from 'react';
import { Card } from '../components';
import { items } from '../components';

export const Home = () => {
  const { total, cartList } = useCart();

  useTitle('HOME');
  return (
    <div>
      <section className="max-w-7xl mx-auto p-7">
        <h1 className="p-4 mb-4 text-2xl text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400">
          {/* Cart Items : {items.length} / ${total} */}
          Cart Items : {cartList.length} / ${total}
        </h1>
        <div className="flex space-x-4 space-y-4 justify-start flex-wrap other:justify-evenly">
          {items.map((elements) => (
            <Card key={elements.id} elements={elements} />
          ))}
        </div>
      </section>
    </div>
  );
};
