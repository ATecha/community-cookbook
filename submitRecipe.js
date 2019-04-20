///var recipeForm = $("#recipeForm");
/*
$(function() { //shorthand document.ready function
    $('#recipeForm').on('submit', function(e) { //use on if jQuery 1.7+
        alert("external js");
        e.preventDefault();  //prevent form from submitting
        var data = $("#login_form :input").serializeArray();
        console.log(data); //use the console for debugging, F12 in Chrome, not alerts
    });
});
*/


//alert("Page loaded");

var config = {
  apiKey: "AIzaSyACvKZECcLtuQ8D3gKBuWCrqfQ4Varlg0U",
  authDomain: "uwbhacks.firebaseapp.com",
  databaseURL: "https://uwbhacks.firebaseio.com",
  projectId: "uwbhacks",
  storageBucket: "uwbhacks.appspot.com",
  messagingSenderId: "1003450066331"
};

//recipeForm.submit(function(event)){

//initial Firebase app
firebase.initializeApp(config);

//reference recommendations object in Firebase db
var recipes = firebase.database().ref("recipes");

//listen for form submit
document.getElementById("recipeForm").addEventListener("submit", submitForm);


//save new recipe to db, using input from form
//var submitRecipe = function() {}

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
  */
  //also need need for check boxes

  var name = getInputVal("recipeName");
  var author = getInputVal("recipeAuthor");
  var iQty = getInputVal("ingredientQty");
  var iMeasure = getInputVal("ingredientMeasurement");
  var iName = getInputVal("ingredientName");
  var steps = getInputVal("steps");
  var mealType = getInputVal("mealType");

  //save to database
  saveRecipe(name, author, iQty, iMeasure, iName, steps, mealType);
}

function saveRecipe(name, author, iQty, iMeasure, iName, steps, mealType){
  var newRecipeRef = recipes.push();
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

/*
$(window).load(function (){

  $("#recipeForm").submit(submitRecipe);
  alert("Recipe submitted");
  event.preventDefault();
});
*/
