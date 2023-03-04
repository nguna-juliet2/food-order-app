import React,{Fragment} from "react";
import MealsSummary from "./MealsSummarty";
import AvaliableMaels from "./AvaliableSummary";

 
const Meals =()=>{
    return(
        <Fragment>
            <MealsSummary/>
            <AvaliableMaels/>
        </Fragment>
    )
};
export default Meals;