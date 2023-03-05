import classes from './AvaliableSummary.module.css';
import Card from '../UI/Card';
import MealItem from './mealsitem/MealsItem';
import { useEffect, useState } from 'react';
 
  
const AvaliableMaels =()=>{
  const [meals, setMeals ] = useState([]);
  const [isLoading, setIsLoading]=useState(true);
  const [httpError, setHttpError]= useState(null);
  useEffect(()=>{
    const fetchmeals= async ()=>{
     const response = await fetch('https://food-order-app-ac68f-default-rtdb.firebaseio.com/meals.json');
     if (!response.ok){
      throw new Error('something went wrong')
     }
     
     
    const  responseData = await response.json(); 
     

     const loadedMeals= [];
     for (const key in responseData){
      loadedMeals.push({
        id:key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price,

      });
     }
     setMeals(loadedMeals);
     setIsLoading(false);
      
    };
    
      fetchmeals().catch(error =>{
        setIsLoading(false)
        setHttpError(error.message);

      });
    }
  ,[]);
  if (isLoading){
    return(
      <section className={classes.mealsLoading}>
        <p>Loading....</p>

      </section>
    );
  }
  if (httpError){
    <section className={classes.mealserror}>
      <p>{httpError}</p>
    </section>
  }

    const mealsList =meals.map(meal=>
    <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price
    ={meal.price}/> );
     return(
        <section className={classes.meals}>
          <Card>
          <ul>
                {mealsList}
          </ul>
          </Card>
            
        </section>
     )
};
export default AvaliableMaels;


// https://food-order-app-ac68f-default-rtdb.firebaseio.com/name%3A%20meals