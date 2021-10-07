import React from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Countries />
      </main>
    </>
  );
}

export default App;
