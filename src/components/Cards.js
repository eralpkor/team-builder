import React from "react";

const Card = (props) => {
  console.log(props);
  return (
  <div className='card'>
    {props.teamList.map(member => {
      return (
        <div className='card' key={member.id}>
          <h2>{member.first}</h2>
          <p>{member.email}</p>
          
          <p>{member.role}</p>
        </div>
      )
    })}
  </div>
  )
}

export default Card;