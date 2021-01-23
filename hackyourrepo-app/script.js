/*
  Write here your JavaScript for HackYourRepo!
*/

function main (){
const body = document.body;

//Header
const header = document.createElement('div');
header.id ='header';
body.appendChild(header)

const h1 = document.createElement('h1');
h1.innerText = 'Hack Your Future Repositories';
header.appendChild(h1);

const select = document.createElement('select');
select.innerText = 'Repositories ...'
header.appendChild(select)

//main 
 const mainContainer = document.createElement('div');
 mainContainer.id = 'main-container';
 body.appendChild(mainContainer);

 //create ul section inside the main
 const infoSection = document.createElement('div');
 infoSection.className = 'sec';
 mainContainer.appendChild(infoSection);
 const list = document.createElement('ul');

 const repo = document.createElement('li');
 repo.innerText = 'Name : ';
 const repoName = document.createElement('p');
 repo.appendChild(repoName);

const description = document.createElement('li');
description.innerText = 'Description : '
const repoDescription = document.createElement('p');
description.appendChild(repoDescription);

const forks = document.createElement('li');
forks.innerText = 'Forks : ';
const repoForks = document.createElement('p');
forks.appendChild(repoForks);

const updated = document.createElement('li');
updated.innerText = 'Updated : '
const repoUpdated = document.createElement('p');
updated.appendChild(repoUpdated)

list.append(repo, description, forks, updated);
infoSection.appendChild(list);


// create the contributor section inside the main
const contributorsSection = document.createElement('div');
contributorsSection.className = 'sec';
mainContainer.appendChild(contributorsSection);

const h3 = document.createElement('h3');
h3.innerText = 'Contributors';
contributorsSection.appendChild(h3);

/******************************************************************** */

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

//show more  repo details .
let repoInfo;

function fetchData() {
  fetch(url)
  .then(response => {
     return response.json();
   })
   .then(data => {
      console.log(data)
      repoInfo = data;
      selectOption(repoInfo);
   })
   .catch(error => {
     console.log('err', error);
   });
  }

function selectOption (repoInfo){
repoInfo.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

 for ( let i = 0 ;i < repoInfo.length; i++){
  const option = document.createElement('option')
  option.innerText = repoInfo[i].name;
  select.appendChild(option)
} 


select.addEventListener('change',()=>{
  const repo = repoInfo.find(repo => {
    return repo.name === select.value;
  });
  if (!repo) {
    throw new Error("weird, this should not happen");
  }
  repoName.innerText = repo.name;
  repoDescription.innerText = repo.description;
  repoForks.innerText = repo.forks;
  repoUpdated.innerText = repo.updated_at
});
}



function selectContributor(repositoryName) {
  const contributorsUrl = `https://api.github.com/repos/HackYourFuture/${repositoryName}/contributors`;
  fetch(contributorsUrl)
  .then(response => response.json())
  .then((jsonData) => {
    jsonData.forEach((contributor) => {
        const contributorCard = document.createElement('div');
        contributorCard.id = "contributorCard";

        const contributorImage = document.createElement('img');
        contributorImage.src = contributor.avatar_url;

        const contributorName = document.createElement('a');
        contributorName.innerText = contributor.login;
        contributorName.href = contributor.html_url;

        const contributions = document.createElement('div');
        contributions.innerText = contributor.contributions;
  
        contributorCard.append(contributorImage,contributorName,contributions);
        contributorsSection.appendChild(contributorCard)
      })
  })
  select.addEventListener('change', (e) => {
  selectContributor(e.target[e.target.value])
})
}
fetchData()
selectContributor()
}
//


window.addEventListener("load", main)