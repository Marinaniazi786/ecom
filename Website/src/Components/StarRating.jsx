import React from 'react'
import StarRatings from 'react-star-ratings';

function StarRating() {
  return (
<StarRatings 
          rating={5}
          starRatedColor="#FFAD33"
        //   starHoverColor= "white"
          changeRating={()=> null }
          numberOfStars={5}
          starDimension="20px"
        starSpacing="5px"
          name='rating'
        />  )
}

export default StarRating