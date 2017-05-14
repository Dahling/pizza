// Business Logic

// Pizza Constructor
function Pizza(size) {
  this.pizzasize = size;
  this.pizzaingredients = [];
};

// Customer Constructor
function Customer(name, address) {
  this.name = name;
}

// Price Prototype 
Pizza.prototype.price = function() {
  var price = 20;

  if (this.pizzasize === "Large") {
    price += 10;
  } else if (this.pizzasize === "Medium") {
    price += 15;
  } else if (this.pizzasize === "Small") {
    price += 15;
  } else {
    price += 5;
  }

  if (this.pizzaingredients.length === 0) {
    price += 1;
  } else {
    price += this.pizzaingredients.length;
  }

  return price;
};

// Front-End User Logic
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
