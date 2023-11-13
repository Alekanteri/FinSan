import React from "react";
import Sidebar from "./components/Sidebar";
import "./sass/main.scss";

const App: React.FC = () => {
  return (
    <div className="bg-wrapper">
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
