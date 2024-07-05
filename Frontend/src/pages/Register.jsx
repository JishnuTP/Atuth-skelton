import React, { useState } from 'react'
import { registerUser } from '../utils/api';
import axios from 'axios';

function Register() {

    const [email,setEmail]= useState("")
    const [password,setPassword]=useState('');
    const [role,setRole]= useState('user');
    const [error,setError]=useState('');

    // const handleSubmit = async(e)=>{
    //   e.preventDefault();
      

    //     try {
    //       const userData={email,password,role}
    //       const data= await axios.post("http://localhost:8080/api/auth/register",userData);
    //       console.log("suceess");
    //       setEmail("");
    //       setPassword("")
    //       setRole("")
    //       console.log('Registered user:', data);
    //     } catch (error) {
    //       console.log(error);
            
    //     }
    // }

  return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center justify-center bg-opacity-50 bg-slate-900 min-h-screen"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/tropical-leaves-background-zoom_23-2148580778.jpg?t=st=1719586995~exp=1719590595~hmac=8d75184f00664c6d9c748f37d4cff1346d6fa0ccaa61d828ffd948004debfbb8&w=1380')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          {/* Registration Section */}
          <div className="bg-white max-w-md mx-auto p-8 bg-opacity-75 rounded-lg shadow-lg p-6">
            <h1 className="text-3xl text-center mb-4">REGISTER</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email...'
                required
              />
              <input
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                required
              />
              <select
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type='submit'
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </form>
          </div>
    
          {/* Long Text and Image Section */}
          <div className="bg- bg-opacity-75 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Highly Secured Web Application REGISTER</h2>
            <p className="text-white mb-4">
            Modern web applications prioritize security to protect user data and privacy. A highly secured web application login employs
          advanced authentication methods, encryption techniques, and secure communication protocols. This ensures that user credentials
          are protected from unauthorized access and data breaches.
            </p>
            <img
              src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104937.jpg?t=st=1719587686~exp=1719591286~hmac=59796edb8b836827e504275a6ea6d0100cce3b64f8c63508a6de750dca599244&w=1380"
              alt="Company Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      );
    };
    
    

export default Register