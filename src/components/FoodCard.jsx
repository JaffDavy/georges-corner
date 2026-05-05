import { useState } from "react";

function FoodCard({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <img 
        src={item.image} 
        alt={item.name} 
        className="h-40 w-full object-cover pointer-events-none"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-yellow-500 font-bold mt-2">
          {item.price} XAF
        </p>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => setQuantity(q => Math.max(1, q - 1))}
            className="bg-gray-700 px-3 rounded"
          >
            -
          </button>

          <span>{quantity}</span>

          <button
            onClick={() => setQuantity(q => q + 1)}
            className="bg-gray-700 px-3 rounded"
          >
            +
          </button>
        </div>

        <button
          onClick={() => addToCart(item, quantity)}
          className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;