
const container = document.querySelector('.container');


function viewPokemon( pokemon ) {
  container.innerHTML += `<div class="card ${pokemon.types[0].type.name}">
  <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
  <p>${pokemon.types[0].type.name} - ${pokemon.name}</p>
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

// function viewPokemon( pokemon ) {

//   const div = document.createElement('div')
//   div.classList.add('card');
//   div.classList.add(pokemon.types[0].type.name);

//   const img = document.createElement('img')
//   img.src = pokemon.sprites.other.dream_world.front_default;



//   container.innerHTML += `<div class="card ${pokemon.types[0].type.name}">
//   <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
//   <p>${pokemon.id} - ${pokemon.name}</p>
//   <div class="info">
//     ${ pokemon.stats.map( item =>
//       `<div class="stats">
//         <div class="stat">${item.stat.name}:</div><div class="stat-valor">${item.base_stat}</div>
//       </div>`
//     ).join(' ')
//   }
//   </div>
//   </div>`
// }

function getPokemon( id ) {
  const resp = fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  resp.then( data => {
    data.json().then( pokemon => viewPokemon( pokemon ))
  })
}

const getPokemonAsync = async ( id ) => {
  const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
  const data = await resp.json();
  console.log(data)
  viewPokemon(data)
}

for (let index = 1; index <= 40; index++) {
  getPokemonAsync(index)
}

