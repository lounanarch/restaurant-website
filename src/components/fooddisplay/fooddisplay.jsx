import React, { useContext } from 'react'
import './fooddisplay.css'
import FoodItem from '../fooditem/fooditem'
import { StoreContext } from '../../context/storecontext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem 
                key={item._id}             // ✅ unique key
                id={item._id}              // ✅ correct ID field
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
