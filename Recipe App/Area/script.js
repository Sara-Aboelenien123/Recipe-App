 fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
 .then(response => response.json())
 .then(data => {
   const countryListContainer = document.getElementById('dataROW');

   data.meals.forEach(meal => {
     const countryCard = document.createElement('div');
     countryCard.className = 'col-md-3';

     const roundedDiv = document.createElement('div');
     roundedDiv.className = 'rounded-2 text-center text-white mb-5';
     roundedDiv.setAttribute('onclick', `getAreaMeals('${meal.strArea}')`);

     const countryIcon = document.createElement('i');
     countryIcon.className = 'fa-solid fa-house-laptop fa-4x text-white';

     const countryName = document.createElement('h3');
     countryName.textContent = meal.strArea;

     roundedDiv.appendChild(countryIcon);
     roundedDiv.appendChild(countryName);

     countryCard.appendChild(roundedDiv);
     countryListContainer.appendChild(countryCard);
   });
 })
 .catch(error => console.error('Error fetching data:', error));

function getAreaMeals(area) {
 const mealPageUrl = `page1.html?area=${encodeURIComponent(area)}`;
 window.location.href = mealPageUrl; 
}