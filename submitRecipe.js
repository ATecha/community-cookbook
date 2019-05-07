var config = {
  apiKey: xxxx,
  authDomain: xxxx,
  databaseURL:  xxxx,
  projectId: xxxx,
  storageBucket: xxxx,
  messagingSenderId:  xxxx,
};

//initial Firebase app
firebase.initializeApp(config);

//reference recommendations object in Firebase db
var recipesRef = firebase.database().ref("recipes");

//listen for form submit
document.getElementById("recipeForm").addEventListener("submit", submitForm);


//save new recipe to db, using input from form

function getInputVal(id){
    return document.getElementById(id).value
}

function submitForm(e){
  e.preventDefault();

/*
  var name = $("#recipeName").val();
  var author = $("#recipeAuthor").val();
  var iQty = $("#ingredientQty").val();
  var iMeasure = $("#ingredientMeasurement").val();
  var iName = $("#ingredientName").val();
  var steps = $("#steps").val();
  var mealType = $("#mealType").val();
  //also need need for check boxes
  */

  var name = getInputVal("recipeName");
  var author = getInputVal("recipeAuthor");
  var iQty = getInputVal("ingredientQty");
  var iMeasure = getInputVal("ingredientMeasurement");
  var iName = getInputVal("ingredientName");
  var steps = getInputVal("steps");
  var mealType = getInputVal("mealType");

  //save to database
  saveRecipe(name, author, iQty, iMeasure, iName, steps, mealType);

  //clear recipe
  document.getElementById("recipeForm").reset();
  alert("Reciped added!");
}

function saveRecipe(name, author, iQty, iMeasure, iName, steps, mealType){
  var newRecipeRef = recipesRef.push();
  newRecipeRef.set({
    name: name,
    author: author,
    iName: iName,
    iQty: iQty,
    Measure: iMeasure,
    steps: steps,
    mealType: mealType
  });
}
