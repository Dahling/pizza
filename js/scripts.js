// Business Logic

// Pizza Constructor
function Pizza(size, ingredients) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};
/*'this.' applies to every pizza; thus, this.pizzasize applies to every pizza's individual size, and this.pizzaingredients applies to every pizza's individual ingredients - an open array*/


// Customer Constructor
function Customer(name) {
  this.name = name;
}
//'this.' applies to every customer; thus, this.name applies to every customer's individual name

// Price Prototype
/* creating a Pizza prototype creates a shared prototype in which a method, like .price, can be applied to every new Pizza*/
Pizza.prototype.price = function() {
  var price = 20;
/*this creates a variable named price, saying the price is 20; below, there is if and else if, showing that if this (new Pizza) pizza size is strictly equal to so-and-so size, the price is += a certain amount, else (aka if it's a mini), there is no additional charge).*/
  if (this.pizzasize === "Large Snobby Pizza") {
    price += 15;
  } else if (this.pizzasize === "Medium Snobby Pizza") {
    price += 10;
  } else if (this.pizzasize === "Small Snobby Pizza") {
    price += 5;
  } else {
    price += 0;
  }
/*the same occurs, below, for what occurred above, except it addresses this.pizzaingredients.length, as far as the open array in the function, at the very top. */
  if (this.pizzaingredients.length === 0) {
    price += 0;
  } else {
    price += this.pizzaingredients.length;
  }

  return price;
};

// Front-End Logic
  $(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedPizzaSize = $("select#pizza-size").val();
    var newCustomer = new Customer(inputtedName);
    var newPizza = new Pizza(inputtedPizzaSize);

  $.each($("input[name='toppings']:checked"), function() {
    newPizza.pizzaingredients.push($(this).val());
  });

  $("ul#pizza-order-list").append("<li><button type='submit' class='btn '><span class='pizzaOrder'>" + "Verify Order" + "</button></span></li>");

  $(".pizzaOrder").last().click(function() {
    $("#pizza-order-detail").show();
    $(".name").text(newCustomer.name);
    $(".pizza-size").text(newPizza.pizzasize);
    $(".pizza-ingredients").text(newPizza.pizzaingredients);
    $(".order-total").text(newPizza.price());

    });
  });
});
