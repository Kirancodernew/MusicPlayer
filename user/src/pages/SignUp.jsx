import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import axios from "../authConfig";
import { useMusicPlayer } from "../context/MusicContext";


const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const {loading,setLoading}=useMusicPlayer()
  // To update the values:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:8080/api/v1/signup", formData);

      // Save token to localStorage
      localStorage.setItem("authToken", data.token);
      alert("Account Created! You are now logged in.");
      
      navigate("/"); // Redirect to home or dashboard
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong during signup. Please try again.";
      alert(errorMessage); // Show error message to user
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex items-center justify-center min-h-[calc(100vh-65px)]">
        <div className="max-w-lg w-full  p-6 bg-white text-black rounded-lg shadow-md">
          <h2 className="sm:text-2xl font-bold text-center mb-6 text-musicColor">
            Create Account
          </h2>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 sm:p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="user123"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
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
               {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <div className="sm:mt-6 text-center">
            <p className="text-sm">
              have an account?{" "}
              <Link to="/login" className="text-red-700 hover:underline">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
