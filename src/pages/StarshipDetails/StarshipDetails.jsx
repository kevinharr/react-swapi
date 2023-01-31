import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  } , [location.state.starship.url])
  }
  return (
    <>
    <h3>Starship Details</h3>
    <h3>{StarshipDetails.name}</h3>

    

      <h3>{monsterDetails.name}</h3>
      <h4>Size: {monsterDetails.size}</h4>
      <h4>Type: {monsterDetails.type}</h4>
      <h4>AC: {monsterDetails.armor_class}</h4>
      <h4>Actions:</h4>
      {monsterDetails.actions?.length ?
        <>
          {monsterDetails.actions.map(action =>
            <div key={action.name}>
              <h4 >{action.name}</h4>
              <h5>{action.desc}</h5>
            </div>
          )}
        </>
        :
        <p>This poor monster has no actions. Womp womp.</p>
      }
    </>
  )
}

export default MonsterDetails;

export default StarshipDetails