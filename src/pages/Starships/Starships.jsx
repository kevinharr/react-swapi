import starShipDetails from "../StarshipDetails/StarshipDetails"
import { useEffect, useState} from 'react'
import { getStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
	const fetchStarships = async () => {
		const starShipDetails = await getStarships()
		setStarships(starShipDetails.results)
	}
	fetchStarships()
  }, [])

  return (
    <>
      {/* <h3>STARSHIPS</h3> */}
      {starships.length ?
			<>
			{starships.map(starship =>
				<div className="ships" key={starship.index}>
					<button><Link to="/starship" state={{starship}}>{starship.name}</Link>	</button>	
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