import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { router } from './routes';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());
app.use(router)

app.get("/", (request, response) => {
  

  return response.json({ message: "Hello World"})
})

app.listen(3333);