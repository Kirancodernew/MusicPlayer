import React, { useState } from "react";
import Navbar from "../components/NavBar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from '../authConfig'
import { useMusicPlayer } from "../context/MusicContext";
const Login = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {loading,setLoading}=useMusicPlayer();
  // To update the values:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      // Send login request to the server
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/login",
        formData
      );

      // Save token to localStorage
      localStorage.setItem("authToken", data.token);
      alert("Login successful!");

      navigate("/music"); // Redirect to music page or dashboard
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      alert(errorMessage); // Show error message to user
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 flex items-center justify-center min-h-[calc(100vh-65px)]">
      <div className="max-w-lg w-full  p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-3 md:mb-6 text-musicColor">Sign In</h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 sm:p-2"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 sm:p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 text-white font-semibold py-2 rounded-md hover:bg-red-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-red-700 hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="sm:mt-6 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-red-700 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
