# Mehmoodoo Traffic Filtering Tool

## Overview
The **Mehmoodoo Traffic Filtering Tool** is designed to help you safely conduct Adsterra arbitrage by filtering traffic from ad networks like PlugRush, BidVertiser, PopAds, and PopCash. The tool ensures that only genuine traffic is forwarded to Adsterra while blocking bots, fake, VPN, and low-quality traffic.

---

## Features
1. **Traffic Filtering Gateway**:
   - Filters bot, fake, VPN/proxy, and low-quality traffic.
   - Ensures genuine traffic is forwarded to Adsterra.

2. **Campaign Management**:
   - Create campaigns with unique tracking links.
   - Edit, pause/play, and delete campaigns.

3. **Dashboard**:
   - Real-time stats:
     - Total traffic.
     - Blocked traffic.
     - Forwarded traffic.
     - Running campaigns.

4. **Traffic Logs**:
   - View detailed traffic logs:
     - All traffic.
     - Original traffic.
     - Blocked traffic.

---

## Folder Structure
```
mehmoodoo/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config/
│   ├── app.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── api.js
│   │   └── index.js
│   └── package.json
└── README.md
```

---

## Requirements
- **Backend**:
  - Node.js
  - MongoDB
- **Frontend**:
  - React.js
- **Hosting**:
  - Render.com (or any platform of your choice)

---

## Installation

### Backend
1. Navigate to the `backend` folder.
   ```bash
   cd backend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Set up the `.env` file with your MongoDB connection string:
   ```
   MONGO_URI=<Your MongoDB Connection String>
   ```
4. Start the backend server.
   ```bash
   node app.js
   ```

### Frontend
1. Navigate to the `frontend` folder.
   ```bash
   cd frontend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the React development server.
   ```bash
   npm start
   ```

---

## Usage
1. Open the frontend in your browser.
2. Create campaigns by adding your Adsterra link and generating a tracking link.
3. Use the tracking link on your ad network for traffic promotion.
4. Monitor traffic stats and logs in real-time on the dashboard.

---

## Deployment
Follow these steps to deploy the tool on Render.com:
1. Push the `backend` folder to a GitHub repository and deploy it as a web service.
2. Push the `frontend` folder to another GitHub repository and deploy it as a static site.

---

## Notes
- Ensure that your MongoDB is properly configured.
- Regularly monitor traffic logs to ensure proper filtering.

---

## License
This project is for personal use and is not open for public distribution.