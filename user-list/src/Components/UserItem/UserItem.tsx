import React from 'react'
import "./userItem.css"
import user from '../../Types/userType'
const UserItem = ({name,city,company}:user) => {
  return (
    <div className="list-item">
        <div className="user-info"><p>Name: {name} <br />City: {city} <br /> company: {company}</p></div>
        <button>Details</button>
    </div>
  )
}

export default UserItem