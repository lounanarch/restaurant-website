import React, { useState } from 'react';
import './home.css';
import Header from '../../components/navbar/header/header';
import Exploremenu from '../../components/navbar/exploremenu/exploremenu';
import FoodDisplay from '../../components/fooddisplay/fooddisplay';
import Appdownload from '../../components/appdownload/appdownload';




const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
       <Header/> 
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
