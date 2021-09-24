import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import { useAuth } from "./auth/auth-context";

// Routes
import { UnprotectedRoutes, ProtectedRoutes } from "./routes";

function App() {
  const { loggedIn } = useAuth();
  return (
    <Router>
      {loggedIn ? <ProtectedRoutes /> : <UnprotectedRoutes />}
    </Router>
  );
}

export default App;
