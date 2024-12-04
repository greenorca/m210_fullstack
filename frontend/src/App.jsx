import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PublicListe from './pages/PublicListe'
import PrivateListe from './pages/PrivateListe'
import Login from './pages/Login'
import Logout from './pages/Logout'
import AuthService from './services/auth.service'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const logout = () => {
    AuthService.logout()
    setLoggedIn(false)
  }

  const login = async (username, password) => {
    const res = await AuthService.login(username, password)
    setLoggedIn(true)
  }

  return (
    <>
    <p>{loggedIn ? "You are logged in" : "You are not logged in"}</p>
    <hr />
    <PublicListe />
    <hr />
    { loggedIn ?
      (<>
        <PrivateListe />
        <Logout logout={logout}/>
        </>
      ) :
      (<>
        <Login login={login}/>
        </>
      )}
    </>
  )
}

export default App
