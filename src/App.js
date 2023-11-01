import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import StudentDashboard from './Student/StudentDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
