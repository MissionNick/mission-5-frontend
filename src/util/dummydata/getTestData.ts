import { json } from 'stream/consumers';

const getTestData = (email) => {

fetch("./user.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
    
    
  return (json)
}

export default getTestData