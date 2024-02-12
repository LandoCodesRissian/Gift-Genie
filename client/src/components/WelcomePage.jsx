import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lampImage from "/Lamp.webp";
import AuthService from "../utils/auth";

const WelcomePage = () => {
  const navigate = useNavigate();

  const goToQuestion = () => {
    navigate("/Search");
  };

  const goToProfile = () => {
    navigate("/Profile");
  };

  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div
          className="bg-blue-100 py-8 px-4 rounded-lg shadow-lg flex flex-col items-center justify-center"
          style={{
            fontFamily: "Lakki Reddy, sans-serif",
            borderColor: "#F7F56A",
          }}
        >
          <header className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-2">
              Welcome To
            </h2>
            <h1
              className="text-6xl font-bold text-blue-800 mb-4"
              style={{
                textShadow: "0 0 5px black",
                color: "#F7D56A",
                marginBottom: "5px",
                marginTop: "35px",
              }}
            >
              Gift Genie
            </h1>
          </header>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-800 mb-4">
              Click on the lamp to begin the search for the perfect gift.
            </p>
          </div>
          <div
            className="relative animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <img
              src={lampImage}
              alt="Genie Lamp"
              title="Rub Me"
              className="max-w-xs w-full h-auto mb-4 cursor-pointer"
              onClick={goToQuestion}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          {AuthService.loggedIn() ? (
            <div className="text-center mt-4">
              <button
                onClick={goToProfile}
                className="px-6 py-2 text-blue-800 font-bold rounded-full hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200 transform hover:scale-105 active:scale-95" 
                style={{
                  marginTop: "5px",
                  letterSpacing: "1px",
                }}
              >
                PROFILE
              </button>
            </div>
          ) : (
            <div className="text-center mt-4">
              <button
                onClick={goToLogin}
                className="px-6 py-2 text-blue-800 font-bold rounded-full hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200 transform hover:scale-105 active:scale-95" 
                style={{
                  marginTop: "5px",
                  letterSpacing: "2px",
                }}
              >
                <span style={{ position: "relative", top: "5px" }}>LOGIN</span>
              </button>

              <p className="text-lg text-gray-600 mt-6">
                Log in to save gifts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
