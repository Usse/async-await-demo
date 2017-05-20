const fetch = require('node-fetch');

async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const body = await response.json();

  if(response.status !== 200) {
    throw Error(body.message);
  }

  return body;
}

showGithubUser('idonotexist-123456789')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  });
