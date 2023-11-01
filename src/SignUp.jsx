import React,{useState} from 'react'
import './App.css';
import { NavLink } from 'react-router-dom';
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserRole] = useState('Student');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const userData = {username,password,userRole};

        try{
            const response = await fetch('/signup',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if(response.ok){
                alert("User SignUp successful");
            }else{
                console.error("SignUp failed.")
            }
        }catch(err){
            console.log('Error:',err);
        }
    }
  return (
    <div className='main'>
        <h1>Sign Up</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username </label>
                <input id='username' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="password">Password </label>
                <input id='password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="userRole">User Role </label>
                <select className='select' value={userRole} onChange={(e)=>setUserRole(e.target.value)}>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
            <h3>Already have an account?</h3>
            <NavLink to='/login'>Sign In</NavLink>
        </form>
    </div>
  )
}

export default SignUp