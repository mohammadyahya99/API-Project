class Renderer {
  friendsRender(friends) {
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ friends });
    $(".friends-container").empty();
    $(".friends-container").append(newHTML);
  }

  userRender(user) {
    const source = $("#users-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(user);
    $(".user-container").empty();
    $(".user-container").append(newHTML);
  }

  quoteRender(quote) {
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ quote: quote });
    $(".quote-container").empty();
    $(".quote-container").append(newHTML);
  }

  pokemonRender(pokemon) {
    $(".pokemon-container").empty();
    const source = $("#pokemon-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(pokemon);
    $(".pokemon-container").append(newHTML);
  }
  paconRender(bacon) {
    $(".meat-container").empty();
    const source = $("#bacon-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ bacon: bacon });
    $(".meat-container").append(newHTML);
  }
}
