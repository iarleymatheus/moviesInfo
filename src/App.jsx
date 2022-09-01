import './App.css';
import {Link} from 'react-router-dom';



function App() {

  return (
    <div className="container">
     <h2><Link to='/'>MoviesInfo</Link></h2>
     <Link to='/movie/1'>Movie</Link>
     <Link to ='/search'>MoviesLib</Link>
    </div>
  )
}

export default App
