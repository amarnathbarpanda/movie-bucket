import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
// 90449c43

const API_URL = 'http://www.omdbapi.com?apikey=90449c43';

const App = () => {


  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, [])


  return (
    <div className="app">
      <h1>Movie Bucket</h1>

      <div className="search">
        <input
          type={'text'}
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt={"Search"}
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => {
                return <MovieCard movie={movie} />
              })}
            </div>
          ) : (
            <div className="container">
              <h2>No movies found</h2>
            </div>
          )}
      </div>
    </div>
  )
}

export default App;