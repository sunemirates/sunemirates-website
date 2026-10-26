# Sun Emirates Mechanical Works LLC - MERN Stack

This is a MERN (MongoDB, Express.js, React, Node.js) conversion of the original ASP.NET website for Sun Emirates Mechanical Works LLC.

## Project Structure

```
SUN_EMIRATES_SLN-PROD/
├── sun-emirates-backend/       # Node.js/Express backend
│   ├── models/                 # MongoDB models
│   ├── controllers/            # Route controllers
│   ├── routes/                 # API routes
│   └── server.js               # Main server file
│
└── sun-emirates-frontend/      # React frontend
    ├── public/
    │   └── images/             # Static images (copied from original)
    └── src/
        ├── components/          # React components
        ├── pages/              # Page components
        ├── App.js              # Main App with routing
        └── index.css           # Styles (from original SunEmirates.css)
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd sun-emirates-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB (if not running as a service):
   ```bash
   mongod
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd sun-emirates-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will open on http://localhost:3000

## API Endpoints

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedbacks
- `GET /api/feedback/:id` - Get feedback by ID
- `DELETE /api/feedback/:id` - Delete feedback

### Contact
- `POST /api/contact` - Submit contact inquiry
- `GET /api/contact` - Get all contacts
- `GET /api/contact/:id` - Get contact by ID
- `DELETE /api/contact/:id` - Delete contact

## Features

- Fully responsive design matching the original ASP.NET website
- Same UI/UX as the original site
- Contact form with validation
- Feedback form with character counter
- Banner slider on homepage
- Client carousel
- All original pages converted:
  - Home
  - About Us
  - Products
  - Services
  - Clients
  - Equipments
  - Contact Us
  - Feedback
  - Sitemap
  - Location Map
  - Privacy Policy
  - Disclaimer
  - Product sub-pages (Stainless Steel, Mild Steel, etc.)

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/sunemirates
```

## Production Build

For production, build the frontend:

```bash
cd sun-emirates-frontend
npm run build
```

The backend will serve the built React app.
