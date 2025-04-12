import React from 'react';
import Footer from '../layout/Footer';
import ShopContent from '../layout/ShopContent';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ShopContent />
      </main>
    </div>
  );
};

export default Shop;