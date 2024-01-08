import React, { useState, useEffect } from 'react'
import AddMovies from '../components/AddMovies'

const FetchAPI = () => {
  const [movieList, setMovieList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // https://swapi.dev/api/films


  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://sh-ecommerce-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json();

      const fetchedMoviesList = [];
      for (const movieID in data) {

        fetchedMoviesList.push({
          id: movieID,
          title: data[movieID].title,
          description: data[movieID].description,
          release_date: data[movieID].date
        })
      }
      setMovieList(fetchedMoviesList);


    } catch (error) {
      setError(error.message)
    }
    setLoading(false)

  }


  const addMovieshandler = async (movie) => {
    const response = await fetch('https://sh-ecommerce-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log("post data", data)

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
      <AddMovies addMovieshandler={addMovieshandler} />
      <h5>Movie List</h5>
      {content}
    </div>
  )
}


export default FetchAPI