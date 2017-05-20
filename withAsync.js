const fetch = require('node-fetch');

//Function declaration
// async function showGithubUser(handle) {
//   const url = `https://api.github.com/users/${handle}`;
//   const response = await fetch(url);
//   return await response.json();
// }


//Function expression
const  showGithubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

showGithubUser('usse')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  });
