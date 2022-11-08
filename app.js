
const container = document.querySelector('.container');

function viewPokemon( pokemon ) {
  container.innerHTML += `<div class="card ${pokemon.types[0].type.name}">
  <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
  <p>${pokemon.name}</p>
  <div class="info">
    ${ pokemon.stats.map( item =>
      `<div class="stats">
        <div class="stat">${item.stat.name}:</div><div class="stat-valor">${item.base_stat}</div>
      </div>`
    ).join(' ')
  }
  </div>
  </div>`
}

function getPokemon( id ) {
  const resp = fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  resp.then( data => {
  data.json().then( pokemon => viewPokemon( pokemon ))
  })
}

for (let index = 1; index <= 16; index++) {
  getPokemon(index)

}