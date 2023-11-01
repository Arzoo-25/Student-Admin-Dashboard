import React from "react";
import { NavLink, Route, RouterProvider} from "react-router-dom";
import MyResponses from "./MyResponses";
import Form from "./Form";

function StudentDashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>
      <NavLink to="/forms"><h3>Form</h3></NavLink>
      <NavLink to="/my-response"><h3>My Response</h3></NavLink>
    </div>
  );
}

export default StudentDashboard;
