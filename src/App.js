import { useState, useEffect } from "react"
import "./styles.css"
import { Route, Routes } from "react-router";
import Dashboard from './pages/Dashboard'
import PersonProfile from "./pages/PersonProfile";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
    .then((res) => res.json())
    .then((data) => {
        setPeople(data.results)
    })
    
  }, [])
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <Routes>
                <Route 
                    path='/' 
                    element={<Dashboard 
                        hiredPeople={hiredPeople} 
                        setHiredPeople={setHiredPeople}
                        people={people}
                        setPeople={setPeople} 
                    />} 
                />
                <Route 
                    path='/view/:id' 
                    element={<PersonProfile 
                        hiredPeople={hiredPeople} 
                        setHiredPeople={setHiredPeople}
                        people={people}
                        setPeople={setPeople}
                    />} 
                />
            </Routes>
          </ul>
        </nav>
      </header>
    </>
  )
}
