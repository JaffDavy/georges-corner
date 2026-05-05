import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cart, removeFromCart }) {
  const [name, setName] = useState("");
  const [table, setTable] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = async () => {
    const order = {
      customerName: name,
      tableNumber: table,
      items: cart,
      total,
    };

    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const data = await res.json();
      setMessage(data.message || "Your order has been received.");
    } catch (error) {
      console.error("Error placing order:", error);
      setMessage("Failed to place order.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-500/30">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8 flex justify-between items-end">
          <div>
            <p className="text-yellow-500 text-xs uppercase tracking-[0.4em] mb-2">Review Selection</p>
            <h1 className="text-5xl font-serif italic">Your Table</h1>
          </div>
          <button
            onClick={() => navigate("/menu")}
            className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
          >
            ← Back to Menu
          </button>
        </header>

        {cart.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-2xl">
            <p className="text-gray-500 font-serif italic text-xl">Your cart is currently empty.</p>
            <button
              onClick={() => navigate("/menu")}
              className="mt-6 text-yellow-500 uppercase tracking-widest text-sm hover:underline"
            >
              Start Ordering
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Items */}
            <div className="space-y-8">
              <div className="space-y-6">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="group flex justify-between items-start border-b border-white/5 pb-6"
                  >
                    <div>
                      <h3 className="text-lg font-serif tracking-wide">{item.name}</h3>
                      <p className="text-gray-500 text-sm italic">
                        {item.quantity} units — {item.price.toLocaleString()} XAF
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-semibold text-yellow-500">
                        {(item.price * item.quantity).toLocaleString()} XAF
                      </span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-[10px] uppercase tracking-tighter text-red-900 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-between items-center text-2xl font-serif italic">
                <span>Total</span>
                <span className="text-yellow-500">{total.toLocaleString()} XAF</span>
              </div>
            </div>

            {/* Right Column: Checkout Form */}
            <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl h-fit">
              <h2 className="text-sm uppercase tracking-[0.3em] mb-8 text-center text-gray-400">Order Details</h2>
              
              <div className="space-y-10">
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="peer w-full bg-transparent border-b border-gray-800 py-2 outline-none focus:border-yellow-500 transition-colors placeholder-transparent"
                    placeholder="Full Name"
                    id="name"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal transition-all"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    value={table}
                    onChange={(e) => setTable(e.target.value)}
                    className="peer w-full bg-transparent border-b border-gray-800 py-2 outline-none focus:border-yellow-500 transition-colors placeholder-transparent"
                    placeholder="Table Number"
                    id="table"
                  />
                  <label 
                    htmlFor="table"
                    className="absolute left-0 -top-5 text-xs uppercase tracking-widest text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:tracking-normal transition-all"
                  >
                    Table Number
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleOrder}
                    disabled={!name || !table}
                    className="w-full bg-yellow-500 text-black py-4 rounded-full font-bold uppercase tracking-[0.2em] transition-all hover:bg-yellow-400 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Confirm Order
                  </button>
                  
                  {message && (
                    <div className="mt-6 p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg text-center">
                      <p className="text-yellow-500 text-sm font-serif italic">{message}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;