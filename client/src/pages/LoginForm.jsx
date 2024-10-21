import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission

    try {
      // Send the POST request using axios
      const response = await axios.post('http://localhost:9090/signup', {
        username: username, // match the expected field names in server
        password: password,
      });

      // Handle the response from the server
      console.log('User registered successfully:', response.data);
      alert('Sign-up successful!');
      navigate('/signupData')

    } catch (error) {
      // Handle any errors that occurred during the request
      console.error('There was an error registering the user:', error);
      alert('Sign-up failed, please try again.');
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <form
        className="flex flex-col w-[600px] pb-10 border-l-8 border-r-8  border-[#efe808]  m-20 gap-4 px-8  bg-gray-900  rounded-2xl"
        onSubmit={handleSubmit}
      >
        <p id="heading" className="text-center mt-8 font-extrabold text-[#efe808] text-3xl">Sign Up</p>

        {/* Username Field */}
        <div className="flex items-center justify-center gap-2.5 bg-gray-900 rounded-2xl p-3 shadow-inner">
          <input
            className="bg-transparent w-full outline-none border-b-2 border-[#efe808] rounded-xl p-5 text-gray-400"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center justify-center gap-2.5 bg-gray-900 rounded-2xl p-3 shadow-inner">
          <input
            className="bg-transparent w-full outline-none text-gray-400  border-b-2 border-[#efe808] rounded-xl p-5"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button type="submit" className="px-6 py-2 rounded bg-gray-700 hover:bg-black text-white transition duration-300">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
