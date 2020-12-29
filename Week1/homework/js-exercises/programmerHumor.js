const img = document.createElement('img');
document.body.appendChild(img);

const url = 'https://xkcd.now.sh/?comic=latest';

function humor(){

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onload = ()=>{
   if (xhr.status < 400){
    img.src = xhr.response.img;
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
function homorAxiosVersion () {
    axios.get(url)
      .then(function (response) {
        img.src = response.data.img;
       console.log(response)
      })
    
      .catch(function (error) {
        console.log(error);
      })
    
      .then(function () {
       console.log('All Done')
      });
}
humor()

