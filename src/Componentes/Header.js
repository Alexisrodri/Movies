import React,{useState} from "react"
import { Search } from "../Fetch"
import { Link } from "wouter"


const Header = () => {

const[busqueda,setBusqueda] = useState('')
const[cargando,setCargando] = useState(true)
const[datos,setDatos] = useState('')
   
   
const APiFind = async(busqueda) =>{
        setCargando(true)
        const res = await Search(busqueda)
        setDatos(res.results)
        setCargando(false)
    }
    
    const ChangesInput = (e) => {
        if(busqueda === ''){
            console.log('vacio');
        } else{
        }
        e.preventDefault()
        APiFind(busqueda)
   }    
   
   const InputValor = (e) =>{
       setBusqueda(e.target.value)
   }



    return(
        <>
        <header className="header">
        <nav className="navbar">
        <h3>TheMovies</h3>
        <ul className="ul">
        <li className="li" ><Link href='/' className="link-header" >Inicio</Link></li>
        <li className="li" ><Link href='/Movies' className="link-header" >Peliculas</Link></li>
        <li className="li" ><Link href='/Tv' className="link-header" >Series</Link></li>
        </ul>
        </nav>
        <article className="Busquedas">
        <div className="cont-busqueda">
        <h1 className="title-busqueda">Bienvenidos.</h1>
        <span>Millones de películas, programas de televisión y personas por descubrir. Explora ahora.</span>
        <form onSubmit={ChangesInput} >
            <input type='text' className="input-busqueda" placeholder="Buscador..." onChange={InputValor}  />
            <button className="btn-busqueda">Search</button>
        </form>
        <section className={`buscador-detalles ${busqueda.length <= 5 }`}>
            
            { cargando ? 
            <h3>Buscando...</h3>
            :
            (
                datos.map((dato)=>{
                    return(
                        <section key={dato.id} className="cont-busqueda">
                        <div  className={`cont-res`}>
                        <a className="link-busqueda" href={`https://www.themoviedb.org/${dato.media_type}/${dato.id}`}>{dato.original_name || dato.title }</a>
                        </div>
                        </section>
                    )
                })
                )

            }
        </section>
        </div>
        </article>
        </header>
        </>
    )
}

export default Header;