import React from 'react';
import PricingDetail from '../layout/PricingDetail';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <PricingDetail />
      </main>
    </div>
  );
};

export default Pricing;