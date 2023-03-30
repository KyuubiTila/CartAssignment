import React from 'react';
import { Link } from 'react-router-dom';

export const Cartcard = ({ elements }) => {
  return (
    <>
      <div class="flex justify-between bg-white border-y-8  rounded-lg overflow-hidden shadow-md">
        <div class="w-20 h-20">
          <Link to="#">
            <img className="rounded-t-lg" src={elements.image} alt="" />
          </Link>
        </div>
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <h3 class="text-lg font-medium">{`${elements.brand}:`}</h3>
          <span class="text-gray-600 font-medium">${elements.price}</span>
        </div>
        <div class="flex items-center px-4 py-3 border-b">
          <label for="quantity" class="text-gray-600 font-medium">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            class="ml-2 w-16 rounded border-gray-400 focus:border-blue-500 focus:outline-none py-1 px-2"
          />
        </div>
        <div class="flex items-center justify-between px-4 py-3">
          <span class="text-gray-600 font-medium">Subtotal:</span>
          <span class="text-gray-800 font-medium">${elements.price}</span>
        </div>
        <div class=" flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ">
          <button class="text-center">Delete</button>
        </div>
      </div>
    </>
  );
};
