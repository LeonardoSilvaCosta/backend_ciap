import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import { AppError } from './errors/AppError';
import swaggerUi from  'swagger-ui-express';

import swaggerDocument from './swagger.json';

const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/swagger', (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/src/swagger.json");
})
app.get("/docs", (request: Request, response: Response) => {
  return response.sendFile(process.cwd() + "/index.html");
})
app.get('/env', (req, res) => {
  res.json(process.env.BASE_URL);
});

app.use(cors());
app.use(router)

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      })
    };

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(process.env.PORT || 3334, () => console.log(`Server is running on PORT: ${process.env.PORT}`));