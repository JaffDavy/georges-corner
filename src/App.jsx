import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">
          George’s Corner 🍷
        </h1>

        <button className="cursor-pointer bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
          Order Now
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
        
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          A Taste of Luxury <br /> at George’s Corner
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          Experience premium snacks, refreshing drinks, and a modern ordering system powered by QR technology.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="cursor-pointer bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            View Menu
          </button>

          <button className="cursor-pointer border border-gray-600 px-6 py-3 rounded-full hover:border-white transition">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
}

export default App;
