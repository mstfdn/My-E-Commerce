import React from 'react';
import ProductDetail from '../layout/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  return (
    <div className="flex-grow">
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;