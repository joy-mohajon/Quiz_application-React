import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import "../Styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="Quiz" element={<Quiz />} />
              <Route path="result" element={<Result />} />
            </Route>
          </Routes>
          {/* <PrivateRoute path="/Quiz" element={<Quiz />} />
          <PrivateRoute path="/result" element={<Result />} /> */}
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
