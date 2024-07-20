'use client'
import { useEffect, useState } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <div className='pt-20'>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
