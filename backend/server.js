import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

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