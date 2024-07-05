import React,{useContext, useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../context/mainContex';

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(null);
    const { setToken } = useContext(mainContext);
    const history = useNavigate();

  



    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
          const response= await axios.post("http://localhost:8080/api/auth/login",{email,password})    
          console.log(response);
          
          //  localStorage.setItem(response.token)
          const { token, user } = response.data;
          // Save token to localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          // Update context with token
          setToken(token);
          // Redirect to dashboard or home page
          history('/home');
                
        } catch (error) {
            setError(error.response.data.msg)
            console.log(error);
            
        }

    }

  return (
    
    <div
    className="flex items-center justify-center min-h-screen"
    style={{
      backgroundImage: `url('https://img.freepik.com/free-vector/tropical-leaves-background-zoom_23-2148580778.jpg?t=st=1719586995~exp=1719590595~hmac=8d75184f00664c6d9c748f37d4cff1346d6fa0ccaa61d828ffd948004debfbb8&w=1380')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Login Container */}
    <div className="w-full max-w-md mx-auto p-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
      <h1 className="text-3xl text-center mb-4">LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          LOGIN
        </button>
      </form>
    </div>

    {/* Company Details Container */}
    <div className="w-full max-w-md mx-auto p-4 mt-4 bg-white bg-opacity-75 rounded-lg shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-2">SECURED LOGIN SYSTEM</h2>
      <p className="text-gray-600">Higly secured login and registration process include bcryption . jwt authentication private and protected routes</p>
      <p className="text-gray-600 mt-2">made by: JISHNU TP, Kerala, india</p>
      <p className="text-gray-600">Phone: +91-9037731597</p>
    </div>
  </div>
);
};