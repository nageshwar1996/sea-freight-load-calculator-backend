# Sea Freight Load Calculator

A web application for calculating sea freight loads and container requirements.

## Features

- Calculate CBM (Cubic Meters)
- Determine appropriate container size
- Estimate total weight
- User-friendly interface
- Real-time calculations

## Tech Stack

- Frontend: React, Bootstrap
- Backend: Node.js, Express
- Database: MongoDB (optional)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (optional, for data persistence)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sea-freight-calculator
```

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a .env file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/sea-freight-calculator
PORT=5000
```

## Running the Application

1. Start the backend server:
```bash
npm run dev
```

2. In a new terminal, start the frontend:
```bash
npm run client
```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Enter the dimensions of your cargo (length, width, height) in centimeters
2. Specify the quantity of items
3. Click "Calculate" to get:
   - Total CBM
   - Suggested container type
   - Estimated weight

## API Endpoints

- `GET /api/health` - Check server status
- `POST /api/calculate` - Calculate freight details
  - Request body: `{ length, width, height, quantity }`
  - Response: `{ cbm, suggestedContainer, totalWeight }`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 