import menu from "../data/menu";
import FoodCard from "../components/FoodCard";

function MenuPage({ addToCart }) {
  const foods = menu.filter(item => item.category === "food");
  const drinks = menu.filter(item => item.category === "drink");

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>

      <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Food 🍔</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {foods.map(item => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-yellow-500">Drinks 🥤</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {drinks.map(item => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

    </div>
  );
}

export default MenuPage;