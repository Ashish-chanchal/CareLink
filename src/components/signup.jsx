import  { useState } from 'react';
import {  useNavigate } from 'react-router'; // Assuming you are using React Router
import{Link} from 'react-router-dom'
function SignupPage() {
  const usertype= "patient";
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup =async  (e) => {
    // Implement your signup logic here, e.g., sending user data to a server.
    // If signup is successful, navigate to the dashboard.
    if (name && password && confirmpassword && email) {

      e.preventDefault();
      const response = await fetch(`http://localhost:5000/api/auth/createUser`,{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({usertype,name,email,password,confirmpassword})
        });
        const json = await response.json();
        console.log(json);
        
        
        if(json.success){
          localStorage.setItem('token',json.authToken);
          navigate.push('/dashbord');
        }
        
  }


  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-center mb-4">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
    
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border rounded"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={handleSignup}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        <p className="text-center text-sm mt-2">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
