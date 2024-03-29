import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import CreateWorkoutPage from "./pages/create-workout-page";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewWorkoutPage from "./pages/view-workout-page";
import EditWorkoutPage from "./pages/edit-workout-page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/routine/:workout_id" element={<ViewWorkoutPage />} />
          <Route path="/create-routine" element={<CreateWorkoutPage />} />
          <Route
            path="/edit-workout/:workout_id"
            element={<EditWorkoutPage />}
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
