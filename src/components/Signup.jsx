import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import authservice from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../Feature/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const signUp = async (data) => {
    setError("");
    try {
      const userData = await authservice.createAccount(data);
      if (userData) {
        const currentUser = await authservice.getCurrentUser();
        if (currentUser) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 bg-gradient-to-r from-blue-500 to-purple-600">   
       <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <div className="mb-4 text-center">
            <Logo width="100px" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit(signUp)}>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter your name"
                label="Name:"
                {...register("name", { required: true })}
              />
              <Input
                label="Email:"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be valid",
                  },
                })}
              />
              <Input
                label="Password:"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <Button type="submit" className="w-full bg-blue-500" disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </div>
          </form>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
