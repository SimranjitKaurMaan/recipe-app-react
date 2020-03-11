import axios from 'axios';
import {BASE_URL} from '../shared/environment';

 export const fetchRecipes = async () =>
  {
    const url = BASE_URL+"filter.php?a=Canadian";
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
    const url=BASE_URL+"lookup.php?i="+id;
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

