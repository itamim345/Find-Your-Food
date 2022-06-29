document.getElementById('button-addon2').addEventListener('click', () => {
    let inputfield = document.getElementById('input-filed');
    let inputValue = inputfield.value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    console.log(url);
    inputfield.value = '';
    fetch(url)
    .then (resp => resp.json())
    .then(data => displayFood(data.meals))
})

function displayFood (foods) {
    let wrapper =  document.getElementById('show-foods');
    wrapper.innerHTML = '';
    for (let food of foods) {
       let div = document.createElement('div');
       div.classList.add('col');
       div.innerHTML = `
                        <div class="card h-100">
                            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${food.strMeal}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Ingredients:- ${food.strIngredient1 + ", " +  food.strIngredient2 +", " +  food.strIngredient3+", " +  food.strIngredient4+", " +  food.strIngredient5+", " +  food.strIngredient6+", " +  food.strIngredient7+", " +  food.strIngredient8+", " +  food.strIngredient9+", " +  food.strIngredient10 +" and Etc.."} </li>
                                <li class="list-group-item">Place of origin:- ${food.strArea}</li>
                                <li class="list-group-item">Food Catagory:- ${food.strCategory}</li>
                            </ul>
                            <a href="${food.strYoutube}" target="_blank"class="btn btn-primary w-100 mx-auto">Get Recipe</a> 
                        </div>  
                    `
        wrapper.appendChild(div);
    }
}