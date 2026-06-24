import React,{useState} from "react";

import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import FoodAI from "../../components/FoodAI/FoodAI";

import "./Home.css";

const Home=()=>{

const [category,setCategory]=
useState("All");

return(

<div>

<Header/>

<div className="home-container">

<div className="main-content">

<ExploreMenu
setCategory={setCategory}
category={category}
/>

<FoodDisplay
category={category}
/>

<AppDownload/>

</div>

<div className="chat-sidebar">

<FoodAI/>

</div>

</div>

</div>

)

}

export default Home;