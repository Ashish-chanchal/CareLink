// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'; 
function LoginPage() {
  const navigate =useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick= async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/loginuser`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({email:email,password:password})
      });
      const json = await response.json();
      console.log(json);
      
      
      if(json.success){
        localStorage.setItem('token',json.authToken);
        navigate('/dashbord');
        
      }
      else{
       alert("Invalid Credentials ")
      }
}

  return ( 
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-center mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button
          onClick={handleClick}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
        <p className="text-center text-sm mt-2">
            Do have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>


        <div className="mt-4 text-center">
          Or continue with
          <div className="flex justify-center mt-2 space-x-4">
            <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
              Google
            </button>
            <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div></>
  );
}

export default LoginPage;


