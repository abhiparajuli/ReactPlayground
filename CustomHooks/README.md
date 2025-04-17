# CustomHooks Project

The **CustomHooks** project is a React application that demonstrates the use of custom hooks to manage state and side effects efficiently. The project focuses on reusable and modular components to simplify complex logic.

## Key Features

### 1. Custom Hook: `useFetch`
- Defined in [`src/hooks/useFetch.js`](src/hooks/useFetch.js).
- Simplifies data fetching by managing loading state, fetched data, and errors.
- Automatically fetches data when the component mounts or when the `fetchFn` dependency changes.
- Returns:
  - `isFetching`: Boolean indicating if data is being fetched.
  - `fetchedData`: The fetched data.
  - `setFetchedData`: A function to update the fetched data manually.
  - `error`: An object containing error details if the fetch fails.

### 2. Backend Integration
- The backend server, implemented with Express, provides endpoints for fetching and updating places data.
- Endpoints include:
  - `/places`: Fetches a list of available places.
  - `/user-places`: Fetches or updates user-specific places.

### 3. Key Components
- **`Places.jsx`**:
  - Displays a list of places with fallback text for empty or loading states.
  - Allows users to select places dynamically.
- **`Modal.jsx`**:
  - A reusable modal component for displaying dialogs.
  - Uses the `createPortal` API for rendering outside the main DOM hierarchy.
- **`DeleteConfirmation.jsx`**:
  - Displays a confirmation dialog for deleting a place.
  - Includes a progress bar to indicate the time remaining for auto-confirmation.
- **`Error.jsx`**:
  - Displays error messages with an optional confirmation button.

### 4. Frontend-Backend Communication
- The frontend uses HTTP utility functions defined in [`src/http.js`](src/http.js) to interact with the backend:
  - `fetchAvailablePlaces`: Fetches available places from the `/places` endpoint.
  - `fetchUserPlaces`: Fetches user-specific places from the `/user-places` endpoint.
  - `updateUserPlaces`: Updates user-specific places via a `PUT` request to `/user-places`.

### 5. Styling
- Global styles are defined in [`src/index.css`](src/index.css).
- Includes animations, responsive design, and a clean, modern UI.
