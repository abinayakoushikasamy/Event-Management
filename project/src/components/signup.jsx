import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import '../assets/login.css';

const Signup = () => {
  const [name, setName] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail_id(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/party/new', {
        name,
        email_id,
        password,
        roles: 'USER',
      });
      console.log(response.data);
      console.log('Signup successful');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      // eslint-disable-next-line no-undef
      setError('Error signing up');
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-4 pt-1 pb-2 mb-4 max-w-md w-full border border-gray-300">
          <h1 className='text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                required
                id="email"
                value={email_id}
                name="email"
                onChange={handleEmailChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                required
                value={password}
                id="password"
                name="password"
                onChange={handlePasswordChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <center>
              <div className="flex justify-center space-x-4">
                <button type="submit" className='custom-btn mt-4 md:mt-0'>
                  Register
                </button>
                <Link to={"/login"}>
                  <button className='custom-btn mt-4 md:mt-0'>Back</button>
                </Link>
              </div>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;