import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

const FetchAPI = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [intervalId, setIntervalId] = useState(null);

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://swapi.dev/api/film');
      console.log(response)
      if (!response.ok) {
        throw new Error('Something went wrong Retrying...')
      }
      const data = await response.json();
      setMovieList(data.results);

    } catch (error) {
      setError(error.message)
    }
    setLoading(false)

  }


  let content = <p>Movies not found</p>;

  if (loading) {
    content = <p>Loading...</p>
  }
  if (error && movieList.length === 0) {
    content = <p>{error}</p>
  }
  if (!loading && movieList.length > 0) {
    content = <ul>
      {movieList.map((movie, index) => <li key={index}>{movie.title}</li>)}
    </ul>

  }

  const handleFetchClick = () => {
    console.log("cleared")
    clearInterval(intervalId);
    setError(null)
  };

  useEffect(() => {
    if (error) {
      const id = setInterval(fetchData, 5000);
      setIntervalId(id);
    }

  }, [error]);
  return (
    <div>
      <h5>Movie List</h5>
      <Button variant="info" onClick={fetchData}>Fetch Movies</Button>
      {error && <Button variant="info" onClick={handleFetchClick}>Stop Fetching</Button>}
      {content}
    </div>
  )
}


export default FetchAPI