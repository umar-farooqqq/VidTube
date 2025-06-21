import React from "react";

const Signup = () => {
  return (
    <div className="bg-purple-950 text-white min-h-screen w-full flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/5 bg-purple-900 rounded-xl shadow-xl overflow-hidden">
        {/* Login Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <div>
            <h3 className="text-2xl font-bold">Welcome back</h3>
          </div>

          <div>
            <p>Sign in to your account to continue to your learning journey</p>
          </div>

          <p className="mt-2">Email</p>
          <div>
            <input
              type="text"
              placeholder="hello@example.com"
              className="border-2 border-gray-300 rounded-md p-2 mt-1 w-full text-black"
            />
          </div>

          <p className="mt-2">Password</p>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-gray-300 rounded-md p-2 mt-1 w-full text-black"
            />
          </div>

          <div className="bg-blue-500 text-white text-center p-2 rounded-md mt-5 w-full cursor-pointer hover:bg-blue-600 transition-colors">
            <button>Sign in</button>
          </div>
          <br />

          <div>
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-white-500 font-bold">
                Create
              </a>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-purple-800 hidden md:block">
          <img
            src="yt.jpeg"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
