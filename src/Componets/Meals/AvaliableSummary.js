import classes from './AvaliableSummary.module.css';
import Card from '../UI/Card';
import MealItem from './mealsitem/MealsItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
 
  
const AvaliableMaels =()=>{
  const [meals, setMeals ] = useState([]);
  const [isLoading, setIsLoading]=useState(true);
  const [httpError, setHttpError]= useState(null);



 


  // useEffect(()=>{
    // const fetchmeals= async ()=>{
    //  const response = await fetch('https://food-order-app-ac68f-default-rtdb.firebaseio.com/meals.JSON');
    //  if (!response.ok){
    //   throw new Error('something went wrong')
    //  }
     
     
    // const  responseData = await response.json(); 
     

    //  const loadedMeals= [];
    //  for (const key in responseData){
    //   loadedMeals.push({
    //     id:key,
    //     name: responseData[key].name,
    //     description: responseData[key].description,
    //     price: responseData[key].price,

    //   });
    //  }
    //  setMeals(loadedMeals);
    //  setIsLoading(false);
      
    // };

    // const fetchmeals= async ()=>{
    //   try {
    //     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    //     if (!response.ok){
    //       throw new Error('something went wrong')
    //     }
    //     const responseData = await response.json();


    //     const loadedMeals= responseData.meals.map(meal => {
    //       return {
    //         id: meal.idMeal,
    //         name: meal.strMeal,
    //         description: meal.strInstructions,
    //         price: Math.floor(Math.random() * 20) + 5
        
        
      //   setMeals(responseData.meals);
      //   setIsLoading(false);
      // } catch (error) {
      //   setIsLoading(false)
      //   setHttpError(error.message);
  //     }
  //   };
    




    
  //     fetchmeals().catch(error =>{
  //       setIsLoading(false)
  //       setHttpError(error.message);

  //     });
  //   }
  // ,[]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('https://free-food-menus-api-production.up.railway.app/best-foods');
        if (!response || !response.data) {
          throw new Error('Something went wrong');
        }
        
        const loadedMeals = response.data.map(meal => ({
          id: meal.id,
          name: meal.name,
          description: meal.dsc,
          price: meal.price,
          img:meal.img
        }));
        
        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };
    
    fetchMeals();
  }, []);



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
      price ={meal.price}
      image={meal.img}
      /> );
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