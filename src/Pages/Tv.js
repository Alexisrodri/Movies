import { useEffect, useState } from 'react'
import { Populartvs } from '../Fetch'
import { Link } from 'wouter'

const Tv = () => {

const[movies,setMovies]=useState()
const[cargando,setcargando]=useState(true)

const MoviesFetch = async()=>{
    setcargando(true)
    const data = await Populartvs()
    console.log(data);
    setMovies(data.results)
    setcargando(false)
}

useEffect(()=>{
    MoviesFetch()
},[])

    return(
    <>
    <nav className="navbar">
        <h3>TheMovies</h3>
        <ul className="ul">
        <li className="li" ><Link href='/' className="link-header" >Inicio</Link></li>
        <li className="li" ><Link href='/Movies' className="link-header" >Peliculas</Link></li>
        <li className="li" ><Link href='/Tv' className="link-header" >Series</Link></li>
        </ul>
        </nav>
    <h1>Movies</h1>
    <section className='card-cont'>
    {cargando?
    <h2>Cargando...</h2>
        :
        (movies.map((datos,idx)=>{
        return(
            <div key={datos.id} id="cont-pelis">
                  <picture className='picture'>
                  <img src={`https://image.tmdb.org/t/p/w500${datos.poster_path || datos.profile_path}`} alt='peliculas' className='poster-img' />
                  </picture>
                  <div className='texts'>
                  <Link className='links-detalles' href={`/Detalles/tv/${datos.id}`}>{datos.title || datos.original_name}</Link>
                  <small>{datos.release_date || datos.first_air_date}</small>
                  </div>
                </div>
            )
    }))}
    </section>
    </>
)
}

export default Tv