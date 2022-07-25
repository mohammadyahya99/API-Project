let apiManager = new APIManager();
let render = new Renderer();

function getAllData(apiManager) {
  apiManager.userData();
  apiManager.pokemonData();
  apiManager.quoteData();
  apiManager.baconData();
}
function RenderAll(render, apiManager) {
  let friendsData = apiManager.data.friends;
  let userData = apiManager.data.users;
  let quoteData = apiManager.data.quote;
  let pokemonData = apiManager.data.pokemon;
  let bacoData = apiManager.data.bacon;
  render.friendsRender(friendsData);
  render.userRender(userData);
  render.quoteRender(quoteData);
  render.pokemonRender(pokemonData);
  render.paconRender(bacoData);
}

$("#load").click(function () {
  getAllData(apiManager);
});

$("#display").click(function () {
  RenderAll(render, apiManager);
});
