import axios from 'axios';

export default async function getData (id){
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const postResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = {userResponse, postResponse};
  
    return data;
   
}