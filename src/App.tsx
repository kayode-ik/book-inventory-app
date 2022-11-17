import React, { useEffect, useState } from "react";
import "./App.css";
import ListCards from "./components/List";

function App() {
  return (
    <div className="app">
      {/* Dashboard Design */}
      <div className="app__header">
        <h1>Book Inventory App</h1>
      </div>
      <div className="app__container">
        <div className="right__container">
          <div className="right__content">
            <h1>List of Books Available on the Platform</h1>
            <div>
              <p>
                Search for books by entering the Publisher, Name , ISBN ,
                Authors, Characters Name and Character Culture
              </p>
            </div>
          </div>
        </div>
        <div className="left__container">
          {/* <div className="repo-container"> */}
          <ListCards />
          {/* </div> */}
        </div>
      </div>
      {/* <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            💚
          </span>{" "}
          with by Kayode
        </div>
      </footer> */}
    </div>
  );
}

export default App;
