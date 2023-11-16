import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);
    const handleAdd =() => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleRemove =() => {
        const removeTeam = team - 1;
        setTeam(removeTeam)
    }

    const teamStyle = { 
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'space-evenly',
        justifyContent: 'space-evenly'

    }


    return(
        <div>
       <div style={teamStyle}>
       <p >players: {team}</p>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleRemove}>Remove</button>
       </div>
        </div>
    )
}