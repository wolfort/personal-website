import React, {useState} from "react";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import "./app.scss";


function App() {

// ustawienie numeru strony
let [page_number, setPage_number] = useState("1");

// oblicza rok
var d = new Date();
const year = d.getFullYear();

return (
  <div className="app">
    {/* Główny blok */}
    <div className="container">
      <div className="box">
          {/* Ładowanie header'a */}
          <Header 
              setPage_number={setPage_number}
              year={year}
          />

        <div className="right-box">
          {/* Załadowanie strony */}
          {page_number == 1 && <Home/>}
          {page_number == 2 && <AboutMe
              year={year}
          />}
          {page_number == 3 && <Portfolio/>}
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
