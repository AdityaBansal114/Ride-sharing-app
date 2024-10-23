import  { useState } from 'react';
import { login } from '../api/auth';
import {toast} from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login details:', { email, password });
    try {
        login();
        toast.success("Login successful!"); 
    } catch (error) {
        toast.success(`Login Error:${error.message}`)
    }
  };

  return (
    <div className="h-[89vh] flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg mt-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg mt-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Don&apos;t have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
