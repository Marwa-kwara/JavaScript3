// xml http request 

const url = 'https://dog.ceo/api/breeds/image/random';

function randomPhoto(){
    const xhr = new XMLHttpRequest();
     xhr.responseType = 'json';

     xhr.open('GET', url);
     xhr.send();
     xhr.onload = ()=>{
         img.src = xhr.response.message;
         img.style.width = '200px'
     }
     
     xhr.onerror = () => {
         console.log(`something went wrong ${error}`)
     }
    }


    // Axios http request
function randomPhotoAxiosVersion () {
axios.get(url)
  .then(function (response) {
    img.src = response.data.message;
    img.style.width = '200px'
  })

  .catch(function (error) {
    console.log(error);
  })

  .then(function () {
   console.log('All Done')
  });
}



const xmlButton = document.getElementById('xmlButton');
const axiosButton = document.getElementById('axiosButton');

const ul = document.createElement('ul');
const li = document.createElement('li');
const img = document.createElement('img');


li.appendChild(img);
ul.appendChild(li);
document.body.appendChild(ul);


xmlButton.onclick = function(){
 return randomPhoto()
}

axiosButton.onclick = function(){
  return randomPhotoAxiosVersion()
}