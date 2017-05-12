
// business logic
function Pizza(name, size) {
  this.name = name;
  this.size = size;
  this.toppings = []
  this.price = 0;
}


function resetFields() {
  $("input#customer-name").val("")

}




// user interface logic
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
  event.preventDefault();
  var orderName = $("input#customer-name").val();
  var inputted



  }
}
