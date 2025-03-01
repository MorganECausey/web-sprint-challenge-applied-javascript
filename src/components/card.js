import axios from "axios";
const Card = (article) => {
const cardDiv = document.createElement("div");
const headlineElement = document.createElement("div");
const authorDiv = document.createElement("div");
const imgContainer = document.createElement("div");
const authorPhoto = document.createElement("img");
const authorName = document.createElement("span");

cardDiv.classList.add("card");
headlineElement.classList.add("headline");
authorDiv.classList.add("author");
imgContainer.classList.add("img-container");

cardDiv.appendChild(headlineElement);
authorDiv.appendChild(imgContainer);
authorDiv.appendChild(authorPhoto);
authorDiv.appendChild(authorName);
imgContainer.appendChild(authorPhoto);
cardDiv.appendChild(authorDiv);

cardDiv.addEventListener("click", () => {
  console.log(headlineElement);
})

headlineElement.textContent = article.headline;
authorName.textContent = `By ${article.authorName}`;

authorPhoto.src = article.authorPhoto;

return cardDiv;
}
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  




const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const select = document.querySelector(selector)

axios.get( "http://localhost:5001/api/articles" )

.then(response => {
  const currentArray = []
  currentArray.push(response.data.articles.javascript,response.data.articles.bootstrap,response.data.articles.technology,response.data.articles.jquery,response.data.articles.node)

  function updateArticle (currentArray){
  for (let i = 0; i < currentArray.length; i++) {
    select.appendChild(Card(currentArray[i]))
  }
}
currentArray.forEach(x =>
  updateArticle(x));
})
}

export { Card, cardAppender }
