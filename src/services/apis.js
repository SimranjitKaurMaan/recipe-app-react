import axios from 'axios';
import {BASE_URL} from '../environment';

 export const fetchRecipes = async () =>
  {
    const url = BASE_URL+"?a=Canadian";
    const promise = new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
                  resolve(response.data);
             })
             .catch(error => {
                  reject(error)
             });

   })

   return promise;

  }  
   
 export const fetchRecipe =  async (id) =>
  {
    
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const promise = new Promise((resolve, reject) => {
        axios.get(url).then((response) => {
                  resolve(response.data);
             })
             .catch(error => {
                  reject(error)
             });

   })

   return promise;

  }

