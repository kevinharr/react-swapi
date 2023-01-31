import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
			<img
			src='../images/star-wars-icon-18.jpg.png'
			style={{ width: "100px", height: "100px"}}
			className="App-logo"
			alt="logo"
			/>
			<Link to="/Starships">  Starships</Link>
    </header>

  )
}

export default NavBar