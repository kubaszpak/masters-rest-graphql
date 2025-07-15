import express, { type Request, type Response } from "express";
import ordersRouter from "./routes/orders";
import categoriesRouter from "./routes/categories";
import productsRouter from "./routes/products";
import usersRouter from "./routes/users";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/orders", ordersRouter);
app.use("/categories", categoriesRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
