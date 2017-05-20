const fetch = require('node-fetch');

const fetchGithubUser = async (handle) => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
}

(async () => {
  const user = await fetchGithubUser('usse');
  console.log(user.name);
  console.log(user.location);
})();
