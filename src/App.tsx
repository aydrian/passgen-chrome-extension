import React from "react";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Strong Password Generator
        </h1>
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
