# HttpRequest Project

The **HttpRequest** project is a React application that interacts with a backend server to manage and display user places and available places. The main focus is on making HTTP requests to fetch and update data.

## Key Features

### 1. Backend Integration
- The backend server, implemented with Express, provides endpoints for fetching and updating places data.
- Endpoints include:
  - `/places`: Fetches a list of available places.
  - `/user-places`: Fetches or updates user-specific places.

### 2. HTTP Utility Functions
- Defined in [`src/http.js`](src/http.js):
  - `fetchAvailablePlaces`: Fetches available places from the `/places` endpoint.
  - `fetchUserPlaces`: Fetches user-specific places from the `/user-places` endpoint.
  - `updateUserPlaces`: Updates user-specific places via a `PUT` request to `/user-places`.

### 3. Frontend-Backend Communication
- The frontend uses these utility functions to interact with the backend, handling errors and parsing JSON responses.

### 4. Error Handling
- Each function checks the response status and throws an error if the request fails.

---

This project demonstrates how to integrate a React frontend with a backend API for data fetching and updating.
