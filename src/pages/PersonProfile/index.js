import { useEffect, useState } from "react"
import HireForm from "./components/HireForm"
import { useLocation } from "react-router";
import { useParams } from "react-router";

function PersonProfile(props) {
    const [person, setPerson] = useState(null)
    const location = useLocation()
    const { id } = useParams()
    const { people } = props

    useEffect(() => {
        if(location.state){
            const { person } = location.state;
            setPerson(person)
        } else {
            people.forEach((item) => console.log(item.id.value, item.name.first))
            // const newPerson = people.find((item) => {
            //     return item.id.value === id
            // })
            // setPerson(newPerson)
        }
    }, [location, id, people])

    if (!person) return <p>Loading...</p>

    return (
        <article>
        <h2>
            {person.name.first} {person.name.last}
        </h2>
        <HireForm person={person} setHiredPeople={props.setHiredPeople} hiredPeople={props.hiredPeople} />
        </article>
    )
}

export default PersonProfile
