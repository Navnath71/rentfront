import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ message: 'Please fill in all fields.' });
      return;
    }
    try {
      const response = await axios.post(`${window.location.origin}/api/auth/login`, formData);
      console.log(response.data);
      toast.success('Successfully logged in');
    } catch (error) {
      console.error(error);
      toast.error('Failed to log in. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4 py-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {errors.message && <div className="text-red-500 mb-4">{errors.message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <input
            className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
       
        <div className="mt-4">
          <Link to="/userdashboard" className="text-blue-500 hover:underline" ><button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          type="submit"
        >
          Login
        </button></Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
