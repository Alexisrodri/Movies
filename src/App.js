import { Route } from 'wouter';
import './App.css';
import Detalles from './Pages/Detalles';
import Home from './Pages/Home';
import Movies from './Pages/Movies'
import Tv from './Pages/Tv'



function App() {
  
  return (
    <>
    <Route path='/' component={Home} />
    <Route path='/Movies' component={Movies} />
    <Route path='/Tv' component={Tv}  />
    <Route path='/Detalles/:media_type/:id' component={Detalles}/>
    </>
  );
}

export default App;
