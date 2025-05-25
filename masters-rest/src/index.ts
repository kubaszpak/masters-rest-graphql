import express, { type Request, type Response } from "express";
import "./database";
import supabase from "./database";
import ordersRouter from "./routes/orders";

const app = express();
const port = 3000;

const users = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    car: "BMW",
    color: "green",
    gender: "F",
    birth: "05.11.2000",
    phoneNumber: 123123124,
    fruit: "apple",
    number: 2,
  },
  {
    id: 2,
    name: "Bob",
    age: 25,
    car: "Audi",
    color: "blue",
    gender: "M",
    birth: "03.11.2000",
    phoneNumber: 123123123,
    fruit: "orange",
    number: 3,
  },
];

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/orders", ordersRouter);

// Route: GET /
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

// Route: GET /slow (Simulating a slow endpoint)
app.get("/slow", (req: Request, res: Response) => {
  // Simulate a delay of 2 seconds
  setTimeout(() => {
    res.send("This is a slow response!");
  }, 2000);
});

// Route: POST /data (Simulate processing incoming JSON data)
app.post("/data", (req: Request, res: Response) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return void res.status(400).send("Name and age are required");
  }

  res.json({
    message: `Hello, ${name}! You are ${age} years old.`,
  });
});

app.get("/products", async (req: Request, res: Response) => {
  res.json((await supabase.from("products").select()).data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
