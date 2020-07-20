import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        <div>
          {props.sushis.slice(0, 4).map(sushi =>
            <Sushi
              name={sushi.name}
              img_url={sushi.img_url}
              price={sushi.price}
              id={sushi.id}
              key={sushi.id} />
          )
          }
        </div>
        <div>
          {props.sushis.slice(4, 8).map(sushi =>
            <MoreButton 
              name={sushi.name}
              img_url={sushi.img_url}
              price={sushi.price}
              id={sushi.id}
              key={sushi.id} />
          )
         } 
        </div>
      </div>
    </Fragment>
  )
}

export default SushiContainer