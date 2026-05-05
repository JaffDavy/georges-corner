import dotenv from 'dotenv'
dotenv.config();

import express from "express"
import cors from "cors"
import mongoose from 'mongoose'

import process from 'node:process'

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined in your .env file");
} else {
  mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Atlas connected ✅"))
    .catch(err => console.error("MongoDB connection error ❌:", err));
}
let orders = [];
// let meals = [
//   { id: 1, name: "Grilled Chicken", price: 3500, category: "food" },
//   { id: 2, name: "Beef Burger", price: 2500, category: "food" },
//   { id: 3, name: "Coca-Cola", price: 500, category: "drink" }
// ];

const MealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String }
});

const Meal = mongoose.model("Meal", MealSchema);

app.get("/meals", async (req, res) => {
  const meals = await Meal.find()
  res.json(meals)
});

app.post("/meals", async (req, res) => {
  const meal = new Meal(req.body)
  await meal.save()
  res.json(meal)
});

app.put("/meals/:id", async (req, res) => {
  await Meal.findByIdAndUpdate(req.params.id, req.body)
  res.json({ message: "Meal updated successfully"})
});

app.delete("/meals/:id", async (req, res) => {
  await Meal.findByIdAndDelete(req.params.id)
  res.json({ message: "Meal deleted successfully"})
});

app.post("/order", (req, res) => {
  const order = req.body;

  orders.push(order);
  console.log("New Order:", order);

  res.json({ message: "Order received successfully 🍽️" });
});

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});