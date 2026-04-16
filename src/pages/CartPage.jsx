function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-900 p-4 rounded-lg"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-yellow-500">
                    {item.price} XAF × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 px-3 py-1 rounded"
                 >
                  Remove
                </button>
              </div>
           ))}
          </div>

          <div className="mt-8 text-xl font-bold">
            Total: <span className="text-yellow-500">{total} XAF</span>
          </div>
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400">
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;