import { useState, useEffect } from "react"
import { getStarshipDetails } from "../../services/sw-api"
import { useLocation, Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const StarshipDetails = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(StarshipDetails)
    }
    fetchStarshipDetails()
  } , [location.state.starship.url])
  
  return (
    <>
    <h3>Starship Details</h3>
    <h3>Starship Name:  {starshipDetails.name}</h3>
    <h3>Starship Model: {starshipDetails.model}</h3>
    <Link to="/">Return to Starship List</Link>
    </>
  )
}

export default StarshipDetails