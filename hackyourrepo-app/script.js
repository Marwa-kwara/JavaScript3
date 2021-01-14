"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function fetchJson(url, callback){
  const xhr = new XMLHttpRequest();
  xhr.response = "json";

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 400){
      callback (null, xhr.response)
    }
    else{
      callback(newError(' ${xhr.status}'), null)
    }
  }
  xhr.onerror = () => {
    callback(newError('Network request failed', null))
  }
  xhr.open('GET', url);
  xhr.send()
}
