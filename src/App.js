import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './LogIn';
import SignUp from './SignUp';
import StudentDashboard from './Student/StudentDashboard';
import Forms from "./Student/Form";
import MyResponses from "./Student/MyResponses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/forms" element={<Forms/>} />
        <Route path="/my-response" element={<MyResponses/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
