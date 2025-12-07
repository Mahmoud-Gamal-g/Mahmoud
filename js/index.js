const recipes = [
  {
    title: "French Onion Soup",
    img:"./img/أكلات_جديدة_وسهلة_مصرية.jpg",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter"
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    }
  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img:"./img/طريقة_تدميس_الفول_في_المنزل.jpg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    }
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img:"./img/طريقة_عمل_الطعمية_بالحمص.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    }
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img:"./img/طريقة_عمل_مسقعة.jpg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    }
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img:"./img/4K-Backgrounds.jpg",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    }
  }
];


 var oldValue;

function changRec(){
    var newValue = Math.floor(Math.random()*recipes.length);
    while(newValue==oldValue){
        newValue=Math.floor(Math.random()*recipes.length)
    }
    oldValue=newValue;
    var ingredients=""
    for (let i = 0; i < recipes[newValue].ingredients.length; i++) {
        ingredients+= `         <li>${i+1} >>>>>>>>>>> ${recipes[newValue].ingredients[i]}</li>`
        
    }
    var instruction=""
    for (let i = 0; i < recipes[newValue].instruction.length; i++) {
        instruction+= `         <li>${i+1} >>>>>>>>>>> ${recipes[newValue].instruction[i]}</li>`
        
    }
    document.getElementById("demo").innerHTML=`
    <div class="container">
  
        <div class="row g-4  align-items-stretch">

            <div class="col-lg-5  position-relative">
              
                <div class="recipe-img-wrapper h-100 ">

                    <img
                        src=${recipes[newValue].img}
                        alt="Caprese Sandwich"
                    />
                </div>

                <!-- Rating pill -->
                <div class="rating-pill">
                    <i class="bi bi-star-fill"></i>
                    <span>${recipes[newValue].rating}</span>
                    <span class="text-muted">(\~150 reviews)</span>
                </div>
            </div>

            <!-- Content column -->
            <div class="col-lg-7 d-flex flex-column recipe-card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <div>
                        <span class="badge bg-success-subtle text-success mb-2">
                            Easy &middot; 10 min
                        </span>
                        <h2 class="h3 mb-1">Caprese Sandwich</h2>
                        <p class="text-muted mb-2">
                            Fresh Italian sandwich with mozzarella, tomato, basil, and balsamic glaze.
                        </p>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <button class="btn btn-sm btn-outline-secondary btn-outline-soft">
                            <i class="bi bi-bookmark-fill"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-secondary btn-outline-soft">
                            <i class="bi bi-share"></i>
                        </button>
                    </div>
                </div>

                <!-- Tabs -->
                <ul class="nav nav-tabs tab-nav mt-2" id="recipeTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link active"
                            id="ingredients-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#ingredients"
                            type="button"
                            role="tab"
                        >
                            Ingredients
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="instructions-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#instructions"
                            type="button"
                            role="tab"
                        >
                            Instructions
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="nutrition-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nutrition"
                            type="button"
                            role="tab"
                        >
                            Nutrition
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            class="nav-link"
                            id="tips-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#tips"
                            type="button"
                            role="tab"
                        >
                            Chef's Tips
                        </button>
                    </li>
                </ul>

                <!-- Tab content -->
                <div class="tab-content mt-3 flex-grow-1">
                    <!-- Ingredients -->
                    <div
                        class="tab-pane fade show active"
                        id="ingredients"
                        role="tabpanel"
                        aria-labelledby="ingredients-tab"
                    >
                        <ul class="ingredients-list ps-3">
${ingredients}
                        </ul>
                    </div>

                    <!-- Instructions -->
                    <div
                        class="tab-pane fade"
                        id="instructions"
                        role="tabpanel"
                        aria-labelledby="instructions-tab"
                    >
                        <ol class="ps-3">
${instruction}
                        </ol>
                    </div>

                    <!-- Nutrition -->
                    <div
                        class="tab-pane fade"
                        id="nutrition"
                        role="tabpanel"
                        aria-labelledby="nutrition-tab"
                    >
                        <table class="table table-sm align-middle mb-0">
                            <tbody>
                            <tr>
                                <th scope="row">Calories</th>
                                <td>${recipes[2].nutrition}</td>
                            </tr>
                            <tr>
                                <th scope="row">Protein</th>
                                <td>18 g</td>
                            </tr>
                            <tr>
                                <th scope="row">Carbs</th>
                                <td>36 g</td>
                            </tr>
                            <tr>
                                <th scope="row">Fat</th>
                                <td>20 g</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <!-- Tips -->
                    <div
                        class="tab-pane fade"
                        id="tips"
                        role="tabpanel"
                        aria-labelledby="tips-tab"
                    >
                        <ul class="ps-3">
                            <li>${recipes[2].servings}</li>
                            <li>Use heirloom tomatoes for more flavor and color.</li>
                            <li>Add a slice of prosciutto if you prefer a non‑vegetarian version.</li>
                        </ul>
                    </div>
                </div>

                <!-- Bottom row: info + main buttons -->
                <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mt-3 gap-3">
                    <div class="d-flex flex-wrap gap-2">
                        <div class="info-pill">
                            <div class="icon-circle icon-orange">
                                <i class="bi bi-clock"></i>
                            </div>
                            <div>
                                <div class="small text-muted">Prep Time</div>
                                <div>10 min</div>
                            </div>
                        </div>

                        <div class="info-pill">
                            <div class="icon-circle icon-green">
                                <i class="bi bi-fire"></i>
                            </div>
                            <div>
                                <div class="small text-muted">Cook Time</div>
                                <div>5 min</div>
                            </div>
                        </div>

                        <div class="info-pill">
                            <div class="icon-circle icon-purple">
                                <i class="bi bi-people"></i>
                            </div>
                            <div>
                                <div class="small text-muted">Serves</div>
                                <div>2 people</div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex flex-wrap gap-2">
                        <button onclick="changRec()" class="btn btn-primary-custom text-white rounded-pill px-4" id="anotherRecipeBtn">
                            Try Another Recipe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}