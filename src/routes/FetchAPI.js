import React, { useState, useEffect } from 'react'


const FetchAPI = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://swapi.dev/api/films');
      console.log(response)
      if (!response.ok) {
        throw new Error('Something went wrong')
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



  useEffect(() => {
    fetchData()

  }, []);
  return (
    <div>
      <h5>Movie List</h5>
      {content}
    </div>
  )
}


export default FetchAPI