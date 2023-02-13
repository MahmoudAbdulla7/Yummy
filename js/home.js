export class Home{
    constructor(){
        let arrayMeals =[];
        this.getMeals();
    }
    async getMeals(){
        let response= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        response=await response.json();
        this.arrayMeals=response.meals
        // console.log(this.arrayMeals);

        this.displayMeals();
        this.getMealDetails();
    }
    displayMeals(){
        let cartona=''
        for (let i = 0; i < this.arrayMeals.length; i++) {
            $(document).ready(()=>{
                $('.loading .spinner').fadeOut(1000,()=>{
                    $('.loading').remove();
                    $('body').css('overflow','auto');
                })
            })
            cartona+=`<div class="col-lg-3 col-sm-6">
            <div class="meal position-relative rounded-2 m-2">
                <img src="${this.arrayMeals[i].strMealThumb}" class="w-100" alt="">
                <div strMeal="${this.arrayMeals[i].strMeal}" class="mealLayer position-absolute top-0 end-0 start-0 bottom-0 rounded-2 d-flex align-items-center">
                    <p class="text-black fs-2 fw-light ms-3">${this.arrayMeals[i].strMeal}</p>
                </div>
            </div>
        </div>`
        }
        document.getElementById('row').innerHTML=cartona;
    }
    getMealDetails(){
        $('.meal ,.meal img').click((e)=>{
            let thisMeal=$(e.target).attr('strMeal');
            let detailMeal= []
            for (let i = 0; i < this.arrayMeals.length; i++) {
                if (this.arrayMeals[i].strMeal==thisMeal) {
                    detailMeal=this.arrayMeals[i]
                }
            }
            console.log(detailMeal);
            // console.log(strIngredient);

            function displayIngredient(){
                let strIngredient=[]
                for (let i = 0; i < 6; i++) {
                    strIngredient[i]=detailMeal[`strIngredient${i}`]
                }
                let cartona=''
                for (let i = 1; i < strIngredient.length; i++) {
                    cartona+=`<p class="bg-success rounded-3 fs-6 p-2 m-2 d-inline-block">${strIngredient[i]}</p>`
                }
                $('#Ingredient').html(cartona);
            }

            function displayTags(){
                if (detailMeal.strTags!=null) {
                    let tags =detailMeal.strTags.split(',');
                    let onlyOneTag=''
                    for (let i = 0; i < tags.length; i++) {
                        onlyOneTag+=`<span class="bg-danger rounded-3 fs-6 p-2 m-2">${tags[i]}</span>`
                    }
                    $('#tags').html(onlyOneTag);
                    console.log(tags);
                }
            }

            $(document).ready(()=>{
                $('.loading .spinner').fadeOut(1000,()=>{
                    $('.loading').remove();
                    $('body').css('overflow','auto');
                })
            })
            $('#row').html(`
            <div class="loading position-absolute start-0 end-0 bottom-0 top-0 bg-black d-flex align-items-center z-1 ">
            <div class="spinner">
                <div class="rect1 bg-light"></div>
                <div class="rect2 bg-light"></div>
                <div class="rect3 bg-light"></div>
                <div class="rect4 bg-light"></div>
                <div class="rect5 bg-light"></div>
            </div>
        </div>
            
            <div class="col-md-4 text-center text-light">
                    <div class="mealPhoto m-3">
                        <img src="${detailMeal.strMealThumb}" class="w-100" alt="">
                        <h1>${detailMeal.strMeal}</h1>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="maelDetailes text-light">
                        <p class="fs-3">Instructions :</p>
                         <p>${detailMeal.strInstructions}</p>
                        <p class="fw-bold ">Area : <span class="fw-light">${detailMeal.strArea}</span> </p>
                        <p class="fs-3">Recipes :</p>
                        <span id="Ingredient"></span>
                        <p class="fs-3 my-3" >Tags :</p>
                        <p id="tags"></p>
                        <br>
                        <br>
                        <a href="${detailMeal.strSource}" target="_blank" class="btn btn-outline-success m-2">Source</a>
                        <a href="${detailMeal.strYoutube}" target="_blank" class="btn btn-outline-danger m-2">YouTube</a>
                    </div>
                </div>
            `)

            displayIngredient();
            displayTags();
        })
    }
}