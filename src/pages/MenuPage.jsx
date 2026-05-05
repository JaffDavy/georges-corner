import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { useNavigate } from "react-router-dom";

function MenuPage({ addToCart, totalItems }) {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  // const [activeTab, setActiveTab] = useState("all"); // Added for a more "menu-like" feel
  const navigate = useNavigate();

  const fetchMeals = () => {
    fetch("http://localhost:5000/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
      .catch((err) => console.error("Fetch Error:", err));
  };

  useEffect(() => {
    fetchMeals();
    const interval = setInterval(fetchMeals, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredMeals = meals.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const foods = filteredMeals.filter((item) => item.category === "food");
  const drinks = filteredMeals.filter((item) => item.category === "drink");

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Elegant Frosted Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10 px-6 md:px-16 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-sm uppercase tracking-[0.4em] text-yellow-500 font-semibold">George’s Corner</h1>
          <p className="text-2xl font-serif italic">The Menu</p>
        </div>
        
        <button
          onClick={() => navigate("/cart")}
          className="group relative flex items-center gap-3 bg-white text-black px-6 py-2.5 rounded-full font-bold transition-all hover:bg-yellow-500"
        >
          <span className="text-sm uppercase tracking-widest">Cart</span>
          <div className="bg-black text-white px-2 py-0.5 rounded-full text-xs group-hover:bg-black">
            {totalItems}
          </div>
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-16 py-12">
        {/* Modern Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <input
            type="text"
            placeholder="Search our collection..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-b border-gray-800 p-4 text-center text-xl font-light outline-none focus:border-yellow-500 transition-colors placeholder:text-gray-600"
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-yellow-500 transition-all duration-500 peer-focus:w-full" />
        </div>

        {/* Food Section */}
        {foods.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-4xl font-serif italic">Main Course</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {foods.map((item) => (
                <div key={item._id} className="hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <FoodCard item={item} addToCart={addToCart} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Drinks Section */}
        {drinks.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-4xl font-serif italic">Vintages & Spirits</h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {drinks.map((item) => (
                <div key={item._id} className="hover:transform hover:-translate-y-2 transition-transform duration-300">
                  <FoodCard item={item} addToCart={addToCart} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty State */}
        {filteredMeals.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-serif italic text-xl">No items match your selection.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default MenuPage;