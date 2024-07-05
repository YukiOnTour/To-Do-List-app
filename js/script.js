<<<<<<< Updated upstream
// Private variable to hold the pokemonList array!!
const pokemonRepository = (function() {
  let pokemonList = [
    { name: 'Bulbasaur', type: ['Grass', 'Poison'], height: 7 },
    { name: 'Charmander', type: ['Fire'], height: 6 },
    { name: 'Squirtle', type: ['Water'], height: 5 },
    { name: 'Pikachu', type: ['Electric'], height: 4 },
    { name: 'Snorlax', type: ['Normal'], height: 21 },
    // Add more Pokémon objects here as needed
  ];

  function addListItem(pokemon) {
    const pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    getAll: function() {
      return pokemonList;
    },
    add: function(pokemon) {
      if (typeof pokemon === 'object' && pokemon !== null) {
        const expectedKeys = ['name', 'type', 'height'];
        const keys = Object.keys(pokemon);
        const isValidPokemon = expectedKeys.every(key => keys.includes(key));
        if (isValidPokemon) {
          pokemonList.push(pokemon);
          return true;
        } else {
          console.error('Invalid Pokémon object. Please provide an object with the following keys: name, type, height');
          return false;
        }
=======
$(document).ready(function() {
  function newItem() {
      // 1. Adding a new item to the list of items
      let inputValue = $('#input').val();
      let li = $('<li></li>').text(inputValue);
      
      if (inputValue === '') {
          alert("You must write something!");
>>>>>>> Stashed changes
      } else {
          $('#list').append(li);
      }

      // 2. Crossing out an item from the list of items
      li.on('dblclick', function() {
          li.toggleClass('strike');
      });

      // 3. Adding the delete button "X"
      let crossOutButton = $('<button></button>').text('X');
      li.append(crossOutButton);

      crossOutButton.on('click', function() {
          li.addClass('delete');
      });

      // 4. Reordering the items
      $('#list').sortable();
  }

  $('#button').on('click', newItem);
});