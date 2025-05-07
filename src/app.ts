import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express } from 'express';
import swaggerDocs from './app/config/swagger';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import logger from './app/utils/logger';

const app: Express = express();

// Logger middleware
app.use(logger.morganMiddleware);

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['*'] }));

// routes
app.use('/api', router);

// Swagger documentation
swaggerDocs(app);

// Test
app.get('/', (_req, res) => {
  res.send('Hello World');
});

// Global Error Handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
