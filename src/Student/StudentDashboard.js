import React from "react";
import { NavLink, Route, RouterProvider} from "react-router-dom";
import MyResponses from "./MyResponses";
import Form from "./Form";

function StudentDashboard() {
  return (
    <div>
      <h2>Student Dashboard</h2>
      {/* <NavLink to='/student/form' Component={<Form/>}>Form</NavLink> */}
      <Form/>
    </div>
  );
}

export default StudentDashboard;
