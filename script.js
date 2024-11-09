const searchbox = document.querySelector('.searchbox');
const searchbtn = document.querySelector(".searchbtn");
const recipeContainer = document.querySelector('.recipe-container');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');
const recipeDetailContent = document.querySelector('.recipe-detail-content');



    // for fetching the recipe 
    const fetchrecipe = async (query) =>{
        recipeContainer.innerHTML = "<h2> Fetching Recipes... </h2>";
            const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const response = await data.json();
            // console.log(response)


            recipeContainer.innerHTML = "";
            response.meals.forEach(meal => {
                const recipeDiv = document.createElement('div');
                recipeDiv.classList.add('recipe');
                
                recipeDiv.innerHTML= `<img src="${meal.strMealThumb}">
            <h3> ${meal.strMeal}</h3>
            <p> ${meal.strArea} Dish </p>
            <p> Belongs to <span>${meal.strCategory} </span> Category </p>`
            
        
            const button = document.createElement('button');
            button.textContent = "View Recipe";
            recipeDiv.appendChild(button);
            recipeContainer.appendChild(recipeDiv);

        // event listner for recipe button...
        button.addEventListener( 'click', () => {
            recipepopup(meal);
        })

        }); 
       }

// const openrecipepopup =()=>{
//     recipeDetailContent.textContent = `
//     <h2>${meal.strMeal}</h2>
//     `
//     recipeDetailContent.parentElement.style.display ="block";
// }

searchbtn.addEventListener( "click" , (e)=>{
    e.preventDefault();
    const searchinput = searchbox.value.trim(); 
    fetchrecipe(searchinput);
    // console.log('The Button was clicked');
});



// 55:20
// start from where cross icon is made by font awsome


