import { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bike Service Shop API',
      version: '1.0.0',
      description: 'API documentation for Bike Service Shop application',
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Development server',
      },
    ],
    // Note: No security schemes defined since there's no auth
  },
  apis: [
    './src/app/modules/**/*.route.ts',
    './src/app/modules/**/*.swagger.ts',
  ],
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app: Express) => {
  // Swagger page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  // Docs in JSON format
  app.get('/api-docs.json', (_req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });

  // eslint-disable-next-line no-console
  console.log(`Swagger docs available at http://localhost:5000/api-docs`);
};

export default swaggerDocs;
