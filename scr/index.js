const BASE_URL = 'https://api.le-systeme-solaire.net'

function getSolarBodies(t){
    const url = `${BASE_URL}/rest/bodies/${t}`;
    return fetch(url)
      .then(res => res.json())

 }
 getSolarBodies("mars").then(data => console.log(data));

// fetch ("https://api.le-systeme-solaire.net/rest/bodies/")
// .then(res => res.json())
// .then(bodies => console.log(bodies.englishName));
