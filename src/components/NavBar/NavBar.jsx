import { Link } from "react-router-dom"
import "./NavBar.css"


const NavBar = () => {
  return (
    <header className="navigation-section">
			{/* <img
			src='../src/images/millenniun_falcon.png'
			style={{ width: "100px", height: "100px"}}
			className="App-logo"
			alt="logo"
			/> */}
			{/* <Link to="/"> STAR WAR </Link> */}
			<Link to="/Starships">  STAR WARS STARSHIPS </Link>
    </header>

  )
}

export default NavBar