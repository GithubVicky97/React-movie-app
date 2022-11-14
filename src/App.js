import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("");

  const [movie, setMovie] = useState([]);

  const changeText = (event) => {
    console.log(event)
    setText(event.target.value);
  };

  const getMovie = (event) => {
    event.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=6b18e782`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };

  return (
    <>
      <body>
        <h1 style={{color:"#ffe98152"}}>
        ~ MOVIE SEARCHING APP 
        </h1>
        <header className="head">
          <form action="" onSubmit={getMovie}>
            <input
              className="inp"
              type="search"
              placeholder="Search Movie"
              aria-label="Search"
              onChange={changeText}
            />
            <button className="btn" type="submit">
              Search
            </button>
          </form>
        </header>
      </body>

      <div className="container my-3">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title"># {value.Title}</h3>
                    <h4 className="card-text">YEAR : {value.Year}</h4>
                    <h5 className="card-text">TYPE : -{value.Type}-</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

{





