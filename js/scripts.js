
// business logic

function Pizza(size) {
  this.size = size;
  this.ingredients = [];
};


Pizza.prototype.price = function() {
  var price = 15;

if (this.size === "Large Snobby Pizza") {
  price += 15;
} else if (this.size === "Medium Snobby Pizza") {
  price += 10;
} else if (this.size === "Small Snobby Pizza") {
  price += 5;
} else {
    price += 0;
  }

if (this.ingredients.length === 0) {
  price *= 1;
} else {
  price += this.ingredients.length;
}
  return price;
  };




function resetFields() {
  $("input#customer-name").val("")
  $("#pizza-size").val("size");
  $('input[type=checkbox]').each(function() {
      this.checked = false;
  });
}




// user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();
  var orderName = $("input#customer-name").val();
  var inputtedPizzaSize = $("select#pizza-size").val();
  var newPizza = new Pizza(inputtedPizzaSize);

  $.each($("input[name='toppings']:checked"), function() {
    newPizza.ingredients.push($(this).val());
  });

  $("ul#pizza-order-list").append("<li><button type='submit' class='btn btn-primary btn-margin'><span class='pizzaOrder'>" + newPizza.size + " Order" + "</button></span></li>");

  $(".pizzaOrder").last().click(function() {
    $("#pizza-order-detail").show();
    $("#customer-name").show();
    $(".pizza-size").text(newPizza.size);
    $(".pizza-ingredients").text(newPizza.ingredients);
    $(".order-total").text(newPizza.price());

  });
});
});
