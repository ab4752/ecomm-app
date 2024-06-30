import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="border p-4 rounded shadow-lg relative w-60 h-40 mt-16">
      <img src={product.image} alt={product.name} className="w-100 h-24 object-cover mb-4"/>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button onClick={handleAddToCart} className="mt-4 bg-blue-600 text-white p-2 rounded">Add to Cart</button>
    </div>
  );
};

export default ProductCard;

