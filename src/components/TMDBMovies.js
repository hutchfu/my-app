import React, { useEffect, useState } from "react";

const TMDBMovies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "c66e19094563695d959bff9cbaab3fef"; 
  const BASE_URL = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TMDBMovies;