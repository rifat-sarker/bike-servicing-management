
# 🚲 Bike Servicing Management 

A backend API for managing a bike servicing center, enabling CRUD operations for customers, bikes, and service records, with additional functionality for assigning and completing servicing jobs.

## 🌐 Live Backend Link
[https://bike-servicing-management-delta.vercel.app](#)

## 🛠 Tech Stack
- **Backend Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database ORM**: Prisma
- **Database**: PostgreSQL

## ⚙️ Setup Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/rifat-sarker/bike-servicing-management
cd file-name
```

### 2️⃣ Install Dependencies
Ensure Node.js (v16 or higher) is installed. Then run:
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/bike_servicing_db?schema=public"
PORT=3000
NODE_ENV=development
```
Replace `user`, `password`, and `bike_servicing_db` with your PostgreSQL credentials and database name.

### 4️⃣ Set Up PostgreSQL
If PostgreSQL isn't installed, install it and create a database:
```bash
psql -U postgres -c "CREATE DATABASE bike_servicing_db;"
```

### 5️⃣ Run Prisma Migrations
Apply the database schema with Prisma:
```bash
npx prisma migrate dev --name init
```

### 6️⃣ Start the Development Server
```bash
npm run dev
```
The API will be available at `http://localhost:3000`.

### 7️⃣ Test the API
Use tools like **Postman** or **cURL** to test the following API endpoints:
- `POST /api/customers`
- `GET /api/customers`
- `GET /api/customers/:id`
- `PUT /api/customers/:id`
- `DELETE /api/customers/:id`

## ✨ Key Features

### Customer Management:
- Create, read, update, and delete customer records.
- **Endpoints**:
  - `POST /api/customers`
  - `GET /api/customers`
  - `GET /api/customers/:id`
  - `PUT /api/customers/:id`
  - `DELETE /api/customers/:id`

### Bike Management:
- Add and retrieve bike details linked to customers.
- **Endpoints**:
  - `POST /api/bikes`
  - `GET /api/bikes`
  - `GET /api/bikes/:id`

### Service Management:
- Create and manage service records with statuses (`pending`, `in-progress`, `done`).
- Mark services as completed with an optional completion date.
- **Endpoints**:
  - `POST /api/services`
  - `GET /api/services`
  - `GET /api/services/:id`
  - `PUT /api/services/:id/complete`

### Pending/Overdue Services:
- Retrieve services that are pending or in-progress and older than 7 days.
- **Endpoint**:
  - `GET /api/services/status`

### Error Handling:
- Standardized error responses with success, status, message, and optional stack (in development mode).

## 📋 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing
Contributions are welcome! Feel free to submit a pull request with your improvements, features, or bug fixes.

## 📝 Author
- **Name**: Rifat Sarker
- **GitHub**: [https://github.com/rifat-sarker](https://github.com/rifat-sarker)