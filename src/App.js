import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Starships from './pages/Starships';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/starships" element={<Starships />}/>
    </Routes>  
    </>   
  )
}

export default App;
