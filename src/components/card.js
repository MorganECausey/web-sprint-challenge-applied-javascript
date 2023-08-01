const Card = (article) => {
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
const articleHeadline = article.Headline;
const authorPhoto = article.authorPhoto;
const authorName = article.authorName;
let mainCard = document.createElement('div');
mainCard.classList.add('card');
mainCard.addEventListener('click', () => {
  console.log('headline');
});

let cardHeadline = document.createElement('div');
cardHeadline.classList.add('headline');
cardHeadline.textContent = article.headline;
mainCard.appendChild(cardHeadline);

let cardAuthor = document.createElement('div');
cardAuthor.classList.add('author');
cardAppender.appendChild(cardAuthor);

let cardImgDiv = document.createElement('div');
cardImgDiv.classList.add('img-div');
cardAuthor.appendChild(cardImgDiv);

let imgCard = document.createElement('img');
imgCard.src = authorPhoto;
cardImgDiv.appendChild(imgCard);

let spanCard = document.createElement('span');
spanCard.textContent = `Written by ${author}`;
cardAuthor.appendChild(spanCard);

return mainCard;
}

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
  const resp = response.data.articles

  Object.keys(object).forEach(key => object[key].forEach(item => document.querySelector(selector).appendChild(Card(item))));

})
.catch(err => {
  console.error(err);
})
}

export { Card, cardAppender }
