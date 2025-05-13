import React from 'react';
import OrdersDetail from '../layout/OrdersDetail';

const Orders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <OrdersDetail />
      </main>
    </div>
  );
};

export default Orders;