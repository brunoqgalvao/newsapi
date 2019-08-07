
const apiUrl = "https://newsapi.org/v2/everything?";
const apiKey = "apiKey=72c57b198cdb4d7b92e2d23e1527c782"

const globalArticles = [];

data = fetch(URL)
.then(response => response.json())
.then(json => json.articles);
console.log(data);

// A $( document ).ready() block.
$( document ).ready(function() {
  $('#pegarNoticias').click(() => updateNews());
});


function updateNews() {
  articleSecton = document.querySelector('#articleSection');
  fetch(apiUrl + "q=bitcoin&language=pt&pageSize=100&" + apiKey)
    .then(response => response.json())
    .then(json => json.articles)
    .then(articles => {
      articles.forEach(article => {
        globalArticles.push(article);
        const card = renderCard(article)
        articleSection.appendChild(card); 
      })
    });

}

function renderCard(article,articleSection) {
  
  const {content, urlToImage, title, description, url} = article;
  card = document.createElement('div');
  card.setAttribute("class", "col-sm-6 mt-3");
  card.innerHTML = 
    //inicio do string literal
    ` 
      <div class="card">
        <img class="card-img-top" src="${urlToImage}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">
            ${description}
            <a href="${url}" class="btn btn-primary">Leia Mais</a>
          </p>
          
        </div>
      </div>
    `; 
    // fim do string literal
  return card;
}