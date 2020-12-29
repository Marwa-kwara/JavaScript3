const xmlButton = document.getElementById('xmlButton');
const axiosButton = document.getElementById('axiosButton');


// xml http request 

const url = 'https://dog.ceo/api/breeds/image/random';

function creatPhoto(){
    const xhr = new XMLHttpRequest();
     xhr.responseType = 'json';

     xhr.open('GET', url);
     xhr.send();
     xhr.onload = ()=>{
      
      const photoList = document.createElement('ul');
      const li = document.createElement('li');
      const img = document.createElement('img');

      li.appendChild(img);
      photoList.appendChild(li);
      document.body.appendChild(photoList);

      img.src = xhr.response.message;
      img.style.width = '200px'
     }
     
     xhr.onerror = () => {
         console.log(`something went wrong ${error}`)
     }
    }


    // Axios http request
function creatPhotoAxiosVersion () {
axios.get(url)
  .then(function (response) {
    const photoList = document.createElement('ul');
    const li = document.createElement('li');
    const img = document.createElement('img');

   li.appendChild(img);
   photoList.appendChild(li);
   document.body.appendChild(photoList);

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

xmlButton.onclick = function(){
 return creatPhoto()
}

axiosButton.onclick = function(){
  return creatPhotoAxiosVersion()
}