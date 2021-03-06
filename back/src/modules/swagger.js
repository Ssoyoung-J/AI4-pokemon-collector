import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Pokemon-Collector API',
      version: '1.0.0',
      description: 'Pokemon-Collector API 명세서입니다.',
    },
    components: {
      securitySchemes: {
        Authorization: {
          in: 'header',
          name: 'Authorization',
          type: 'apiKey',
          scheme: 'bearer',
        },
      },
      security: { Authorization: [] },
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/db/schemas/*.js', './src/routers/*.js'],
};

const specs = swaggerJsDoc(options);
module.exports = {
  swaggerUi,
  specs,
};
