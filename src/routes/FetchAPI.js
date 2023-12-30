import React, { useEffect, useState } from 'react'

 const FetchAPI = () => {
const [movieList, setMovieList] = useState([])
    const fetchData = async ()=>{
    try {
          const response = await fetch('https://swapi.dev/api/films');
          const data = await response.json();
          setMovieList(data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
      <h5>Movie List</h5>
      <ul>
      {movieList.map((movie)=><li>{movie.title}</li>)}
      </ul>
      </div>
  )
}


export default FetchAPI