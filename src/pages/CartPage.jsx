import { useState } from "react"

function CartPage({ cart, removeFromCart }) {
  const [name, setName] = useState("")
  const [table, setTable] = useState("")
  const [message, setMessage] = useState("")

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    const order = {
      customerName: name,
      tableNumber: table,
      items: cart,
      total
    }

    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      })

      const data = await res.json()
      setMessage(data.message || "Order placed successfully!")
    } catch (error) {
      console.error("Error placing order:", error)
      setMessage("Failed to place order.")
    }
  }
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
          <div className="mt-10 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded bg-gray-800"
            />

            <input
              type="text"
              placeholder="Table Number"
              value={table}
              onChange={(e) => setTable(e.target.value)}
              className="w-full p-3 rounded bg-gray-800"
            />

            <button
              onClick={handleOrder}
              className="cursor-pointer w-full bg-yellow-500 text-black py-3 rounded font-bold"
            >
             Place Order
            </button>

            {message && (
              <p className="text-green-400 mt-2">{message}</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;