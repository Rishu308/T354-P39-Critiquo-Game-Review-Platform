# Critiquo - Game Review Platform

Critiquo is a Product Review Platform (P39) developed by Team 354, focusing on game reviews. It is built using the MERN (MongoDB, Express.js, React, Node.js) full stack.

## Deployment

Check out the deployed version of the project:
https://critiquo-games-and-reviews.onrender.com

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview

Critiquo is a platform dedicated to game reviews. Users can explore and share their opinions on various games. The platform provides a seamless experience for both discovering new games and expressing thoughts through reviews.

## Features

- User authentication and authorization
- Browse and search for games
- Submit and read game reviews
- Apply category, price and review search filters
- Sort games based on price or reviews
- User profiles with ability to update user info
- Cloud MongoDB access on the backend for storing products, users, and reviews
- Responsive design for various devices

## Getting Started

### Prerequisites

Ensure you have the following starting software installed:

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rishu308/Critiquo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Critiquo
   ```

3. Install dependencies for both the backend and frontend:

   ```bash
   cd backend && npm install && cd ../frontend && npm install
   ```

## Usage

1. Start the MongoDB server. Update JWT_SECRET and MONGODB_URI variables in your .env file

2. In the project directory, run:

   ```bash
   cd backend && npm start
   ```

   This will start the server.

3. Open a new terminal window, navigate to the project directory, and run:

   ```bash
   cd frontend && npm start
   ```

   This will start the React app.

4. Open your browser and go to `http://localhost:3000` to access the Critiquo platform.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Rishabh Sharma (21BCE0943)
- Chaitanya Raju (21BCE0636)
- M.V. Krishna Vamsi (21BEC0072)
- Uthkarsh Sharma (21BPS1170)
- Chaitanya Kadam (21BIT0369)
