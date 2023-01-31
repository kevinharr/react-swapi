import StarShipDetails from "../StarshipDetails/StarshipDetails"
import { useEffect, useState} from 'react'
import { getStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
	const fetchStarships = async () => {
		const starshipData = await getStarships()
		setStarships(starshipData.results)
	}
	fetchStarships()
  }, [])

  return (
    <>
      <h3>Starships</h3>
      {starships.length ?
			<>
			{starships.map(starship =>
				<div key={starship.index}>
					<Link to="/starship" state={{starship}}>{starship.name}</Link>		
				</div>
				)}
      </>
			:
			<>
			<h4>Loading starships</h4>
			</>
			}
		</>
	)
}

export default Starships