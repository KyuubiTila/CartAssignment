import { Cartcard } from '../components';
export const Cart = () => {
  const items = [
    {
      id: 1,
      brand: 'Balenciaga',
      description: 'This is a balanciaga bag, You will love it',
      price: 25,
      image: '../assets/images/img7.jpg',
    },
    {
      id: 2,
      brand: 'Fendi',
      description: 'This is a Fendi bag, You will love it',
      price: 29,
      image: '../assets/images/img7.jpg',
    },
    {
      id: 3,
      brand: 'Nike',
      description: 'This is a Nike bag, You will love it',
      price: 43,
      image: '../assets/images/img7.jpg',
    },
    {
      id: 4,
      brand: 'Gucci',
      description: 'This is a Gucci bag, You will love it',
      price: 31,
      image: '../assets/images/img7.jpg',
    },
    {
      id: 5,
      brand: 'Joha',
      description: 'This is a Joha bag, You will love it',
      price: 119,
      image: '../assets/images/img7.jpg',
    },
    {
      id: 6,
      brand: 'LV',
      description: 'This is a LV bag, You will love it',
      price: 100,
      image: '../assets/images/img7.jpg',
    },
    {
      id: 7,
      brand: 'Fenty',
      description: 'This is a Fenty bag, You will love it',
      price: 101,
      image: '../assets/images/img7.jpg',
    },
  ];
  return (
    <div>
      <section>
        <div flex space-x-4 space-y-4>
          {items.map((elements) => (
            <Cartcard key={elements.id} elements={elements} />
          ))}
        </div>
      </section>
    </div>
  );
};