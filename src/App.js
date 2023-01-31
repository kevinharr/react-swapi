import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Starships from './pages/Starships/Starships'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/starships" element={<Starships />}/>
      <Route path="/starship" element={<StarshipDetails />}/>

    </Routes>  
    </>   
  )
}

export default App;
