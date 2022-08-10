import React,{useState, useEffect} from "react"
import { Link } from "wouter"


const Populares = () => {
    
const[loading,setLoading] = useState(true)
const[data,setData]=useState('')
const[media,setMedia]=useState('all')



 const MoviesTop = async () => {
  try{
      let key = `fcf55caed48f3af81ad6a601c8c62a74`
      let url = `https://api.themoviedb.org/3/trending/${media}/day?api_key=${key}&language=es`
      const res = await fetch(url);
      const data = await res.json()
      return data
  }catch(error){
      console.log(error);
  }
}

const TheMovie = async () => {
  setLoading(true)
  const movies = await MoviesTop()
  console.log(movies.results);
  setData(movies.results)
  setLoading(false)
}  

const click =(e) => {
  setMedia('all')
  e.target.classList.toggle('active')
}
 const click2 = (e) => {
  setMedia('tv')
  e.target.classList.toggle('active')
} 
const click3 = (e) => {
  setMedia('movie')
  e.target.classList.toggle('active')
} 

useEffect(()=>{
  TheMovie()
},[media])



    return(
    <main className="main">
    <div className="main-nav">
    <h3 className="main-title">Tendencias:</h3>
    <button className="main-btn active" onClick={click} >All</button>
    <button className="main-btn" onClick={click2} >Tv</button>
    <button className="main-btn" onClick={click3} >movie</button>
    </div>
      <section className="cont-titulos">
        {loading?
          <small>Cargando</small>
          :(
            data.map((datos)=>{
              return(
                <div key={datos.id} id="cont-pelis">
                  <picture className='picture'> 
                  <img src={`https://image.tmdb.org/t/p/w500${datos.poster_path || datos.profile_path}`} alt='peliculas' className='poster-img' />
                  <div className="Ranking">
                  <h4>{Math.floor(datos.vote_average || datos.popularity)+'0%'}</h4>
                  </div>  
                  </picture>
                  <div className='texts'>
                  <Link className='links-detalles' href={`/Detalles/${datos.media_type}/${datos.id}`}>{datos.title || datos.original_name}</Link>
                  <small>{datos.release_date || datos.first_air_date}</small>
                  </div>
                </div>
              )
            })
          )
        }

        </section>
      </main>
    )
}

export default Populares;