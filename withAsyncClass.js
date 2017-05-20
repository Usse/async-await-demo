const fetch = require('node-fetch');

class GithubApiClient {
  async fetchUser(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  const client = new GithubApiClient();
  const user = await client.fetchUser('usse');
  console.log(user.name);
  console.log(user.location);
})();
