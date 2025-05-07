import React from 'react';
import ShopContent from '../layout/ShopContent';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const params = useParams();
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ShopContent />
      </main>
    </div>
  );
};

export default Shop;