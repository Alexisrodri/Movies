import { useEffect, useState } from 'react'
import { Link } from 'wouter'

const Detalles = (props) => {

const[data,setData]=useState([''])
const[loading,setLoading] = useState(true)

useEffect(()=>{
    Search()
},[])


const Search = async () => {
        setLoading(true)
        let key = `fcf55caed48f3af81ad6a601c8c62a74`
        let url = `https://api.themoviedb.org/3/${props.params.media_type}/${props.params.id}?api_key=${key}&language=es`
        const res = await fetch(url);
        const respuesta = await res.json()
        setData(respuesta)
        setLoading(false)
}

console.log(data);



    return(
    <>
    <nav className="navbar">
        <h3>TheMovies</h3>
        <ul className="ul">
        <li className="li" ><Link href='/' className="link-header" >Inicio</Link></li>
        <li className="li" ><Link href='/Movies' className="link-header" >Peliculas</Link></li>
        <li className="li" ><Link href='/Tv' className="link-header" >Series de tv</Link></li>
        </ul>
        </nav>
        <section className="details-cont">
        {loading?
          <small>Cargando</small>
          :(
            <div key={data.id} id="detalles-media">
          <div className='banner'>
            <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt='img-banner' className='img-banner' />
            <article className='cont-all'>
            <picture className='img-detail'>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.profile_path}`} alt='peliculas' className='poster-img' />
            </picture>
          <div className='texts-detail'>
                  <h1 className='detail-ttl'>{data.title || data.original_name }</h1>
                  {data.genres.map((genre)=>{
                        return(
                        <div className='genre' key={genre.id}>
                        <p className='genre-ttl'>{genre.name} </p>
                        </div>
                        )
                  })}
          <div className="Ranking-detail">
                  <small><span>Lanzamiento: </span>{data.release_date || data.first_air_date}</small>
                  <span>Calificacion: </span>
                  <h4 className='rank'> {Math.floor(data.vote_average || data.popularity)+'0%'}</h4>
                  </div> 
                  <h3>Descripcion</h3>
                  <p>{data.overview}</p>
          </div>    
            </article>
                  </div>
                  </div>
          )
        }

        </section>        
</>
)
}

export default Detalles