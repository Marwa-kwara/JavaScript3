const url = 'https://www.randomuser.me/api';

function randomuser(){

    const xhr = new XMLHttpRequest();
     xhr.responseType = 'json';
     xhr.onload = ()=>{
      if (xhr.status < 400){
      console.log(xhr.response)
     } else {
       console.log("Http Error", xhr.status);
     }
     }
     
     xhr.onerror = () => {
         console.log(`something went wrong ${error}`)
        }
     xhr.open('GET', url);
     xhr.send();
}


    // Axios http request
function randomUserAxiosVersion () {
    axios.get(url)
      .then(function (response) {
       console.log(response)
      })
    
      .catch(function (error) {
        console.log(error);
      })
    
      .then(function () {
       console.log('All Done')
      });
}
randomuser();
