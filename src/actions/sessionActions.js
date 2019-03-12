export const searchCities = text => async dispatch=>{
 console.log(text);
  
  let response = await fetch(
    'https://bluestarapi.azurewebsites.net/api/SS/getallsources' ,
      {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors' // no-cors, cors, *same-origin
      }
  );
 
 let data =await response.json();
 console.log(data);
  return dispatch({
    type: 'SEARCH_CITIES',
    result: data
  });
};
