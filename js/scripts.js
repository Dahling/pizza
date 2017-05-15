// Business Logic

// Pizza Constructor
function Pizza(size) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};

// Customer Constructor
function Customer(name) {
  this.name = name;
}

// Price Prototype
Pizza.prototype.price = function() {
  var price = 20;

  if (this.pizzasize === "Large Snobby Pizza") {
    price += 15;
  } else if (this.pizzasize === "Medium Snobby Pizza") {
    price += 10;
  } else if (this.pizzasize === "Small Snobby Pizza") {
    price += 5;
  } else {
    price += 0;
  }

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
