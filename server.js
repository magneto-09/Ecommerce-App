import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";


dotenv.config(); // load environment variables. 


const app = express(); // app instance

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the backend of ecommerce app</h1>");
});


connectDB().then(()=> {
  console.log('Connected to MongoDB database'.bgMagenta.white); 

  app.listen(process.env.PORT, ()=> {
      console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgWhite
      .black)
  })
})
.catch((e)=>console.log(`Error while connecting:- ${JSON.stringify(e)}`.bgRed.yellow))

