import React from 'react';
import ProductDetail from '../layout/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();
  
  return (
    <div className="flex-grow">
      <ProductDetail productId={productId} />
    </div>
  );
};

export default ProductDetailPage;