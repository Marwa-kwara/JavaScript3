"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
//displays the repositories in an alphabetically-ordered list.
placeholderRepos.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

//show more  repo details .



const reponame = document.getElementById('name');
const description = document.getElementById('Description');
const forks = document.getElementById('Forks');
const updated = document.getElementById('Updated');
const selectRepo = document.getElementById('repo')

for ( let i = 0 ;i < placeholderRepos.length; i++){
  const option = document.createElement('option')
  option.value = placeholderRepos[i].name;
  option.innerText = placeholderRepos[i].name;
  selectRepo.appendChild(option)
}


selectRepo.addEventListener('change' ,() =>{
 switch(repo.value){
  case 'AndAnotherOne':
  reponame.innerText = placeholderRepos[0].name;
  description.innerText = placeholderRepos[0].description;
  forks.innerText = placeholderRepos[0].forks;
  updated.innerText = placeholderRepos[0].updated;
  break;

  case 'HYF-Is-The-Best':
  reponame.innerText = placeholderRepos[1].name;
  description.innerText = placeholderRepos[1].description;
  forks.innerText = placeholderRepos[1].forks;
  updated.innerText = placeholderRepos[1].updated;
  break;

  case 'SampleRepo1':
  reponame.innerText = placeholderRepos[2].name;
  description.innerText = placeholderRepos[2].description;
  forks.innerText = placeholderRepos[2].forks;
  updated.innerText = placeholderRepos[2].updated;
  break;
}
} )