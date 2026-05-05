import mongoose from "mongoose"

const MONGO_URI = 'process.env.MONGO_URI'

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to Atlas for seeding..."))
  .catch(err => console.log("Seeding connection error:", err))

const MealSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String
});

const Meal = mongoose.model("Meal", MealSchema);

const meals = [
  {
    name: "Grilled Chicken",
    price: 3500,
    category: "food",
    image: "https://images.unsplash.com/photo-1604908176997-431c5c6c4f8d"
  },
  {
    name: "Beef Burger Deluxe",
    price: 3000,
    category: "food",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    name: "Pepper Steak",
    price: 5000,
    category: "food",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    name: "Chicken Shawarma",
    price: 2000,
    category: "food",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
  },
  {
    name: "Coca-Cola",
    price: 500,
    category: "drink",
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505"
  },
  {
    name: "Fresh Orange Juice",
    price: 1500,
    category: "drink",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba1c"
  }
];

async function seed() {
  await Meal.deleteMany(); // clear old data
  await Meal.insertMany(meals);
  console.log("Database seeded 🔥");
  mongoose.connection.close();
}

seed();