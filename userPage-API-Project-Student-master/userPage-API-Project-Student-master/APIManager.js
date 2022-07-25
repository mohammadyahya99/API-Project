function usersReq(users) {
  let user = {
    fName: users.results[0].name.first,
    lName: users.results[0].name.last,
    city: users.results[0].location.city,
    state: users.results[0].location.state,
    image: users.results[0].picture.medium,
  };
  return user;
}

function friendsReq(friends) {
  let friend = friends.results.map((user) => {
    return { fName: user.name.first, lName: user.name.last };
  });
  friend.splice(0, 1);
  return friend;
}

function randomNumber() {
  const MAX = 949;
  const MIN = 1;
  return Math.floor(Math.random() * MAX) + MIN;
}

class APIManager {
  constructor() {
    this.data = {};
  }
  userData() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      success: (users) => {
        this.data.users = usersReq(users);

        this.data.friends = friendsReq(users);
      },
    });
  }
  quoteData() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest/",
      success: (quote) => {
        this.data.quote = quote.quote;
      },
    });
  }

  pokemonData() {
    const randomId = randomNumber();
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${randomId}/`,
      success: (pokemom) => {
        const proper = pokemom.name[0].toUpperCase() + pokemom.name.slice(1);
        const pokemonObject = {
          name: proper,
          image: pokemom.sprites.front_default,
        };
        this.data.pokemon = pokemonObject;
      },
    });
  }

  baconData() {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (bacons) => {
        this.data.bacon = bacons[0];
      },
    });
  }
}
