export class Ingredients{

    IngredientArray=[];
    IngredientMeals;
    strIngredient='';
    mealDetail='';
  constructor() {
    this.getIngredient()
  }
  async getIngredient() {
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    data = await data.json();
    this.IngredientArray=data.meals;
    // console.log(this.IngredientArray);
    this.displayIngredient();
    this.getMealsOfIngredient();
  }
  displayIngredient(){
    $(document).ready(()=>{
      $('.loading .spinner').fadeOut(1000,()=>{
          $('.loading').remove();
          $('body').css('overflow','auto');
      })
  })
        let cartona=''
        for (let i = 0; i < 20; i++) {
            cartona+=`
            <div class="loading position-absolute start-0 end-0 bottom-0 top-0 bg-black d-flex align-items-center z-1 ">
            <div class="spinner">
                <div class="rect1 bg-light"></div>
                <div class="rect2 bg-light"></div>
                <div class="rect3 bg-light"></div>
                <div class="rect4 bg-light"></div>
                <div class="rect5 bg-light"></div>
            </div>
        </div>
            
            <div class="col-sm-6 col-lg-3 shadow">
            <div strIngredient="${this.IngredientArray[i].strIngredient}" class="shadow-lg bg-dark p-3 m-2 rounded text-center cursor-pointer content">
                <p strIngredient="${this.IngredientArray[i].strIngredient}" class=" fa-solid fa-bowl-food fs-1 icon text-success"></p>
                <h2 strIngredient="${this.IngredientArray[i].strIngredient}" class="text-white fs-4 text-center Ingredient">${this.IngredientArray[i].strIngredient.split(' ').splice(0,2).join(' ')}</h2>
                <p stringredient="${this.IngredientArray[i].strIngredient}" class="text-light fs-6 fw-medium p-1">${this.IngredientArray[i].strDescription.split(" ").splice(0, 10).join(" ")}</p>;
            </div>
            </div> `
        }
        document.getElementById('row').innerHTML=cartona;
        
  }

  getMealsOfIngredient() {
    $(".content").click((e) => {
      this.strIngredient = $(e.target).attr("strIngredient");
      this.filterIngredient(this.strIngredient);
      
    });
  }

  async filterIngredient(strIngredient) {
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`
    );
    data = await data.json();
    this.IngredientMeals = data.meals;
    this.displayFilterMeals();
    this.getMealDetails();
  }

  displayFilterMeals() {
    // console.dir(this.IngredientMeals);
    $(document).ready(()=>{
      $('.loading .spinner').fadeOut(1000,()=>{
          $('.loading').remove();
          $('body').css('overflow','auto');
      })
  })
    if (this.IngredientMeals!==[]) {
        let cartona = "";
        for (let i = 0; i < this.IngredientMeals.length; i++) {
          cartona += `    <div class="loading position-absolute start-0 end-0 bottom-0 top-0 bg-black d-flex align-items-center z-1 ">
          <div class="spinner">
              <div class="rect1 bg-light"></div>
              <div class="rect2 bg-light"></div>
              <div class="rect3 bg-light"></div>
              <div class="rect4 bg-light"></div>
              <div class="rect5 bg-light"></div>
          </div>
      </div>
          
          <div class="col-lg-3 col-sm-6">
                <div class="meal position-relative rounded-2 m-2">
                    <img idMeal="${this.IngredientMeals[i].idMeal}" src="${this.IngredientMeals[i].strMealThumb}" class="w-100" alt="">
                    <div idMeal="${this.IngredientMeals[i].idMeal}" class="mealLayer position-absolute top-0 end-0 start-0 bottom-0 rounded-2 d-flex align-items-center">
                    <p idMeal="${this.IngredientMeals[i].idMeal}" class="text-black fs-2 fw-light ms-3">${this.IngredientMeals[i].strMeal}</p>
                    </div>
                </div>
                </div>`;
        }
        document.getElementById("row").innerHTML = cartona;
    }
  }
  async getMealById(idMeal) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    response = await response.json();
    this.mealDetail = response.meals[0];
    // console.log(this.mealDetail);
  }

  getMealDetails() {
    $(".meal ,.meal img").click((e) => {
      let idMeal = $(e.target).attr("idMeal");
      this.getMealById(idMeal);
      if (this.mealDetail!=='') {
        this.display(this.mealDetail);
      }
    });
  }
  display(x){
    $(document).ready(()=>{
      $('.loading .spinner').fadeOut(1000,()=>{
          $('.loading').remove();
          $('body').css('overflow','auto');
      })
  })
    let thisMealDetail=x;
    // console.log(thisMealDetail);


      function displayIngredient(){
        let strIngredient=[]
        for (let i = 0; i < 6; i++) {
            strIngredient[i]=thisMealDetail[`strIngredient${i}`]
        }
        let cartona=''
        for (let i = 1; i < strIngredient.length; i++) {
            cartona+=`<p class="bg-success rounded-3 fs-6 p-2 m-2 d-inline-block">${strIngredient[i]}</p>`
        }
        $('#Ingredient').html(cartona);
    }

    function displayTags(){
        if (thisMealDetail.strTags!=null) {
            let tags =thisMealDetail.strTags.split(',');
            let onlyOneTag=''
            for (let i = 0; i < tags.length; i++) {
                onlyOneTag+=`<span class="bg-danger rounded-3 fs-6 p-2 m-2">${tags[i]}</span>`
            }
            $('#tags').html(onlyOneTag);
            // console.log(tags);
        }
    }


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
                <img src="${thisMealDetail.strMealThumb}" class="w-100" alt="">
                <h1>${thisMealDetail.strMeal}</h1>
            </div>
        </div>
        <div class="col-md-8">
            <div class="maelDetailes text-light">
                <p class="fs-3">Instructions :</p>
                 <p>${thisMealDetail.strInstructions}</p>
                <p class="fw-bold ">Ingredient : <span class="fw-light">${thisMealDetail.strIngredient}</span> </p>
                <p class="fs-3">Recipes :</p>
                <span id="Ingredient"></span>
                <p class="fs-3 my-3" >Tags :</p>
                <p id="tags"></p>
                <br>
                <br>
                <a href="${thisMealDetail.strSource}" target="_blank" class="btn btn-outline-success m-2">Source</a>
                <a href="${thisMealDetail.strYoutube}" target="_blank" class="btn btn-outline-danger m-2">YouTube</a>
            </div>
        </div>
    `)

    displayIngredient();
    displayTags();
  }
}