function FoodCard({ item, addToCart }) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
      <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-yellow-500 font-bold mt-2">{item.price} XAF</p>

        <button
          onClick={() => addToCart(item)}
          className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;