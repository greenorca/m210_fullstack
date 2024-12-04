import { useEffect, useState } from "react"
import axios from "axios"

const PrivateListe = () => {
  const [liste, setListe] = useState([])

  // doesn't work with vite: const API_URL = (process.env.REACT_APP_API_URL ||"http://localhost:8080") + "/items";
  const API_URL = (import.meta.env.VITE_API_URL ||"http://localhost:8080") + "/items";


  console.log("Private API-URL: ", API_URL)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    axios.get(API_URL, {
      "headers": {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => setListe(response.data))
      .catch(error => console.log(error))
  }, [])


  return (
    <>
      <h1>PrivateListe</h1>
      <ol>
        {liste.map(item => <li key={item}>{item}</li>)}
      </ol>
    </>
  )
}

export default PrivateListe