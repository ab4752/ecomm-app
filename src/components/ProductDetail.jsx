import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Handle buy now functionality here
    alert('Thank you for your purchase!');
    navigate('/');
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4"/>
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-gray-700 text-lg">${product.price}</p>
      <button onClick={handleBuyNow} className="mt-4 bg-blue-600 text-white p-2 rounded">Buy Now</button>
    </div>
  );
};

export default ProductDetail;
