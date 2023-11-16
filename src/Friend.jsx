/* eslint-disable react/prop-types */
export default function Friend({friend}){
    const friendStyle = { 
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return(
        <div style={friendStyle}>
            <p>name: {friend.name}</p>
            <p>username:{friend.username}</p>
            <p>email:{friend.email}</p>
            <p>phone:{friend.phone}</p>
        </div>
    )
}