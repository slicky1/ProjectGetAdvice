//const BASE_URL = 'https://api.le-systeme-solaire.net/rest/'

async function getSolarBodies(){
    const res = await fetch (`https://api.le-systeme-solaire.net/rest/bodies/`)
    const data = await res.json()
    createDropDown(data.bodies)
}
getSolarBodies()


 getSolarBodies().then(bodies =>console.log(bodies));

function createDropDown(planetList) {
    document.getElementById("body").innerHTML = `<select>
    <option>Choose planetary body</option>
    ${Object.keys(planetList).map(function(body){
        return `<option> ${body}</option>`

    }).join('')}
</select>`
}
