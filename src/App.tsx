import React from "react";
import Sidebar from "./components/Sidebar";
import "./sass/style.scss";
import Header from "./components/Header";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
      <Header />
      <Main />
      </div>
    </div>
  );
};

export default App;
