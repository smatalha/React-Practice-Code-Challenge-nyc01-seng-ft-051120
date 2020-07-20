import React from 'react'

const MoreButton = (props) => {
    return <button onClick={/* Fill me in! */ null}>
      <img src={props.img_url} width="100%" alt={props.name} />
      {props.name} - ${props.price}
            More sushi!
          </button>
}

export default MoreButton 
//I might need to make it class function, 