
function fetchRandomDogImage(){
     // Creating the object
     var xhrRequest = new XMLHttpRequest();
     
     // When response is receved what we have to do 
     xhrRequest.onload = function(){
          // console.log(xhrRequest.response);
          // Converting the response string to JSON object
          var responseJSON = JSON.parse(xhrRequest.response);
          // extracting the link from json object
          var imageURL = responseJSON.message;
          // inserting the link in image tag
          document.getElementById('dog-img').setAttribute('src',imageURL);
          
     };
     
     // Initializing the object 
     // Syntax : open(HTTP request type, link from which the image is fetched ,boolean)
     // boolean tells that weather we want our request to be asynchronous or synchronous 
     // true for asynchronous and false for synchronous
     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
     
     // Make the request to the server
     xhrRequest.send();
     
}


// Selecting the butoon and adding click on it
// $('fetch-dog-img-btn').click(fetchRandomDogImage);
var fetchBtn = document.getElementById('fetch-dog-img-btn');

fetchBtn.addEventListener('click' , fetchRandomDogImage);