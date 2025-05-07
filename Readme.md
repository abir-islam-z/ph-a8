# Bike Servicing Management API

## 📋 Project Overview

The Bike Servicing Management API is a comprehensive backend solution designed for bike service centers to efficiently manage their customers, bikes, and service records. This RESTful API provides a complete digital infrastructure for tracking the entire lifecycle of bike servicing operations, from customer registration to service completion.

## 🌐 Live Backend Link

- Production: [https://bike-servicing-api.onrender.com](https://bike-servicing-api.onrender.com)
- API Documentation: [https://bike-servicing-api.onrender.com/api-docs](https://bike-servicing-api.onrender.com/api-docs)

## 🛠️ Tech Stack

### Backend Framework

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **TypeScript** - Statically typed JavaScript

### Database

- **PostgreSQL** - Relational database
- **Prisma ORM** - Next-generation ORM for Node.js and TypeScript

### API Documentation

- **Swagger UI** - Interactive API documentation
- **Swagger JSDoc** - API documentation generator

### Validation & Error Handling

- **Zod** - TypeScript-first schema validation
- **HTTP Status** - HTTP status utility

### Utilities

- **Winston** - Versatile logging library
- **Morgan** - HTTP request logger middleware
- **dotenv** - Environment variable management

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **ts-node-dev** - TypeScript execution and restart tool

## 🚀 Setup Guide

### Prerequisites

- Node.js 18.x or higher
- PostgreSQL 14.x or higher
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/bike-servicing-api.git
   cd bike-servicing-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**

   - Copy the example environment file
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your database configuration:
     ```
     NODE_ENV=development
     PORT=5000
     DATABASE_URL=postgresql://username:password@localhost:5432/bike_service_db
     ```

4. **Database Setup**

   - Create a PostgreSQL database
     ```bash
     createdb bike_service_db
     ```
   - Run Prisma migrations to create the schema
     ```bash
     npx prisma migrate dev
     ```
   - Seed the database with initial data
     ```bash
     npm run prisma:seed
     ```

5. **Start the Development Server**

   ```bash
   npm run start:dev
   ```

   The server will start at http://localhost:5000

6. **Access the API Documentation**
   Open your browser and navigate to:
   ```
   http://localhost:5000/api-docs
   ```

### Production Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**

   ```bash
   npm run start:prod
   ```

3. **Environment Variables for Production**
   Ensure these environment variables are set in your production environment:
   ```
   NODE_ENV=production
   PORT=5000 (or your preferred port)
   DATABASE_URL=your_production_database_url
   ```

## ✨ Key Features

### Customer Management

- Create, read, update, and delete customer profiles
- Validation for customer data (name, email, phone)
- Associate multiple bikes with a single customer

### Bike Registration

- Register bikes with detailed specifications (brand, model, year)
- Link bikes to their owners (customers)
- Track complete service history for each bike

### Service Record Management

- Create and manage service records with detailed descriptions
- Track service status (pending, in-progress, done)
- Record service dates and completion timestamps

### Business Intelligence

- **Overdue Service Detection**: Automatically identify services that are:
  - Pending or in-progress AND
  - Started more than 7 days ago
- Comprehensive reporting capabilities

### API Design

- RESTful architecture following best practices
- Standardized request/response formats
- Comprehensive error handling

### Developer Experience

- Interactive API documentation with Swagger
- Type safety with TypeScript and Prisma
- Consistent error responses across endpoints
- Detailed logging for debugging

### Performance & Reliability

- Efficient database queries via Prisma ORM
- Proper connection handling and resource management
- Error boundary implementation

## 🔍 API Overview

The API is organized around the following main resources:

### Customer Endpoints

- `POST /api/customers` - Create a new customer
- `GET /api/customers` - List all customers
- `GET /api/customers/:customerId` - Get customer details
- `PUT /api/customers/:customerId` - Update customer information
- `DELETE /api/customers/:customerId` - Remove a customer

### Bike Endpoints

- `POST /api/bikes` - Register a new bike
- `GET /api/bikes` - List all bikes
- `GET /api/bikes/:bikeId` - Get bike details
- `PUT /api/bikes/:bikeId` - Update bike information
- `DELETE /api/bikes/:bikeId` - Remove a bike

### Service Endpoints

- `POST /api/services` - Create a service record
- `GET /api/services` - List all service records
- `GET /api/services/status` - Get pending or overdue services
- `GET /api/services/:serviceId` - Get service details
- `PUT /api/services/:serviceId/complete` - Mark service as complete
- `DELETE /api/services/:serviceId` - Remove a service record

## 📑 Additional Resources

- [API Documentation](https://bike-servicing-api.onrender.com/api-docs)
- [GitHub Repository](https://github.com/yourusername/bike-servicing-api)
- [Issue Tracker](https://github.com/yourusername/bike-servicing-api/issues)
