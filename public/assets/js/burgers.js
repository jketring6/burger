$(function() {
    $(".eat-da-burger").on("click", function(event) {
        var id = $(this).data("id");

        var eatenStatus = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenStatus
        }).then(
            function() {

                console.log("changed to", eatenStatus);
                
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                
                console.log("added a new burger");
                
                location.reload();
            }
        );
    });
});