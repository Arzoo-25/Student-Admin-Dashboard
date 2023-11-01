import React,{useState} from 'react'
import "./App.css"
const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const loginData = {username,password};

    try {
        const response = await fetch('/login',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        if(response.ok){
            alert('Login successful');
        }else{
            console.error('Login failed');
        }
    } catch (error) {
        console.log("Error: ",error);
    }
  }
  return (
    <div className='main'>
        <h1>Log In</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            </div>
            <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LogIn