const searchBtn = document.getElementById('search');
let wordEl = document.getElementById('word');
let resultDiv = document.getElementById('result')

//clear input field
function clearInput(){
 wordEl.value = "";
   
}


searchBtn.addEventListener('click',function(){

//get the value of input
let word = wordEl.value
if(wordEl.value != ""){
    const apiUrl = 'https://api.api-ninjas.com/v1/dictionary?word=' + word;

// Fetch request using the fetch() function
fetch(apiUrl,{
    headers: {
        'X-Api-Key': 'la/j/xsA5RcYkjAz8XOp5A==DHEPt3qxe0kyeaSx',
        'Content-Type': 'application/json'
        // Add any other headers required by the API here
      }
})
  .then(response => {
    // Check if the response status is in the 200-299 range (indicating success)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Process the JSON data
    {
        console.log(data)
        if(!data.valid){
            clearInput()
            resultDiv.innerHTML = "No such word!";
            
        }else{
            clearInput()
            resultDiv.innerHTML = data.definition;
     
        }
    }; 
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
}

})
