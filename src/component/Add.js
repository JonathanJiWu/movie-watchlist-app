import React, {useState} from "react";

export const Add = () => {
    const[query, setQuery]=useState('')
    const [results, setResults]=useState([])


    const onChange=e=>{
        e.preventDefault()

        setQuery(e.target.value)

        fetch(`
        https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&query=${e.target.value}`)
        .then(res=>res.json())
        .then((data=>{
          console.log(data)
          if(!data.errors){
            setResults(data.results)
          }else{
            setResults([])
          }
        }))
    }


  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input type="text" placeholder="Search for a movie" value={query} onChange={onChange}/>
          </div>
          {results.length > 0 &&(
            <ul className='results'>
              {results.map(movie=>(
                <li>
                  {movie.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
