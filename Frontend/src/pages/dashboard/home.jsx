// components/Dashboard.js
import React, { useContext } from 'react';

import { mainContext } from '../../context/mainContex';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user} = useContext(mainContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? (
        <div className="mt-4">
          <p>Welcome, {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
     <Link to="/profile">
     profile
     </Link>
    </div>
  );
};

export default Dashboard;
