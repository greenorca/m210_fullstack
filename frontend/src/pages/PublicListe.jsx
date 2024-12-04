import axios from "axios"
import { useEffect, useState } from "react"

const PublicListe = () => {

  const [liste, setListe] = useState([])

  const API_URL = import.meta.env.VITE_API_URL ||"http://localhost:8080/";

  /*fetch('/config.json')
  .then((response) => response.json())
  .then((config) => {
    API_URL = config.REACT_APP_API_URL;
  }).catch(error => console.log(error));*/

  console.log("Public API-URL: ", API_URL)

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setListe(response.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h1>PublicListe</h1>
      <ol>
        {liste.map(item => <li key={item}>{item}</li>)}
      </ol>
    </>
  )
}
export default PublicListe