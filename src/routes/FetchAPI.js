import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

 const FetchAPI = () => {
const [movieList, setMovieList] =  useState([])
const [loading, setLoading] = useState(false)

    const fetchData = async ()=>{
      setLoading(true)
    try {
          const response = await fetch('https://swapi.dev/api/films');
          const data = await response.json();
          setMovieList(data.results);
          setLoading(false)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        
    }

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <h5>Movie List</h5>
      <Button variant="info" onClick={fetchData}>Fetch Movies</Button>
      <ul>
      {movieList.map((movie)=><li>{movie.title}</li>)}
      </ul>
      </div>
  )
}


export default FetchAPI