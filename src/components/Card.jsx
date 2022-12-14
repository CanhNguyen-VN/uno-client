import React from 'react'

const Card = ({card}) => {
  return (
    <div onMouseEnter={()=>{console.log('mouse in')}}>
        <img className="transition w-30 h-40 hover:scale-110 cursor-pointer" src={"./assets/" + card} alt={card} />
    </div>
  )
}

export default Card