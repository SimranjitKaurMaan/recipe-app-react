import axios from 'axios';


 export const fetchRecipes = async () =>
  {
  
    const BaseURL='https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';
    const promise = new Promise((resolve, reject) => {
        axios.get(BaseURL).then((response) => {
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
    
    const BaseURL=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const promise = new Promise((resolve, reject) => {
        axios.get(BaseURL).then((response) => {
                  resolve(response.data);
             })
             .catch(error => {
                  reject(error)
             });

   })

   return promise;

  }

