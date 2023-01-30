import StarShipDetails from "./StarshipDetails"
import { useState} from 'react-dom'

const StarShips = () => {
  const [starships, setStarships] = useState([])

  return (
    <>
      <h3>Starships</h3>
      {starships.length ?
			<>
			{starships.map(starship =>
				<div key={starship.index}>
					{starship.name}
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
        



export default StarShips