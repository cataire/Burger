  
$(document).ready(function() {

  $("#addBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault(event);

    let burgerName = $("#burger-name").val();
    if (burgerName === "") {
      alert("You can't eat an empty burger. Please add something to it!");
    }

    else {

    var newBurger = 
    {
    	burger_name: burgerName,
    	devoured: false
    };

    console.log(newBurger);

     $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(result) {

      


        console.log("created new burger " + result);
        // Reload the page to get the updated list
        location.reload();
      }
    );

  }

  });

  $(".devour").on("click", function(event) 
  {
  	var id = $(this).attr("data");
  	var newState = $(this).attr("newstate");

  	let newBurgerState = {
  		devoured: newState,

  	};

  	$.ajax("/api/burgers/" + id, {
  		type: "PUT",
  		data: newBurgerState
  	}).then(
  		function() 
  		{
  			console.log("Change state to ", newState);
  			location.reload();
  		})
  	

  });

   $(".delete").on("click", function(event) 
  {
    var id = $(this).attr("data");


    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() 
      {
        console.log("Burger deleted");
        location.reload();
      })
    

  });

});