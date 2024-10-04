import { Toaster } from 'sonner';
import { Signup } from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
