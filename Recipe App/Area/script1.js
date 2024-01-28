function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function createMealCard(meal) {
  const template = document.getElementById('mealCardTemplate');
  const clone = document.importNode(template.content, true);

  const mealCard = clone.querySelector('.meal-card');
  mealCard.dataset.mealId = meal.idMeal;

  const mealImage = clone.querySelector('.meal-image');
  mealImage.src = meal.strMealThumb;
  mealImage.alt = meal.strMeal;
  mealImage.title = meal.strMeal;

  const mealName = clone.querySelector('.meal-name');
  mealName.textContent = meal.strMeal;

  return clone;
}

const area = getParameterByName('area');

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
  .then(response => response.json())
  .then(data => {
    const mealListContainer = document.getElementById('mealList');

    data.meals.forEach(meal => {
      const mealCard = createMealCard(meal);
      mealListContainer.appendChild(mealCard);
    });
  })
  .catch(error => console.error('Error fetching meal data:', error));

document.addEventListener('click', function (event) {
  const clickedElement = event.target;

  const mealCard = clickedElement.closest('.meal-card');
  if (mealCard) {
    const mealId = mealCard.dataset.mealId;
    navigateToMealDetailsPage(mealId);
  }
});

function navigateToMealDetailsPage(mealId) {
  const mealDetailsPageUrl = `page2.html?id=${encodeURIComponent(mealId)}`;
  window.location.href = mealDetailsPageUrl; 
}