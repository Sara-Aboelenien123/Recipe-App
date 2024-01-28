// $(document).ready(function () {
//     $("#loading").fadeout(1000)
// })


// $("#open-close").click(function () {
//     let boxWidth = $(".nav-divs").innerWidth();
//     if ($("#open-close").css("left") == "0px") 
//     {
//         $(".nav-divs").animate({left:-boxWidth} ,1000 );
//     } else{
//         $(".nav-divs").animate({left:"0px"} ,1000 );
//     }
// });

$("#open-close").click(function () {
    $(".nav-divs").toggle(1000)
})



$(document).ready(function () {
    function fetchData() {
        for (var i = 0; i < 15; i++) {
            $.ajax({
                url: 'https://www.themealdb.com/api/json/v1/1/random.php',
                method: 'GET',
                success: function (data) {
                    displayResults(data.meals);
                },
                error: function (error) {
                    console.log('Error:', error);
                }
            });
        }
    }

    function displayResults(meals) {
        if (meals) {
            meals.forEach(function (meal) {
                var imgSrc = meal.strMealThumb;
                var name = meal.strMeal;
                var instructions = meal.strInstructions;
                var mealId = meal.idMeal; // Added to get the meal ID

                var imageElement = '<img src="' + imgSrc + '" alt="' + name + '" class="img-fluid">';
                var nameElement = '<p class="text-white">' + name + '</p>';

                var resultDiv = '<div class="col-md-4 mb-4" data-meal-id="' + mealId + '">' + imageElement + nameElement + '</div>';

                $('#recipeList').append(resultDiv);
            });

            $('.col-md-4').on('click', function () {
                const selectedMealId = encodeURIComponent($(this).data('meal-id'));
                window.location.href = `Area/page2.html?id=${selectedMealId}`;
            });
        } else {
            $('#recipeList').html('<p>No results found.</p>');
        }
    }

    fetchData();
});
