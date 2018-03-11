$(document).ready(function(){
    $("#foodhubform").submit(function() {

        var foodhubForm = {
            breakfast: $("#breakfast").val(),
            lunch: $("#lunch").val(),
            dinner: $("#dinner").val()
        };

        console.log(foodhubForm);

       // $("#wait").css("display", "block");

        $.post('api/showmeal', foodhubForm, function(data, status) {

            console.log(data);
            if (data.msg) {

                if (data.msg == "admin") {

                    location.href = "/admin";

                } else {

                    if (data.msg == "successful") {
                        location.href = "/profile";
                    } else {
                        $("#wait").css("display", "none");
                        alert(data.msg);
                    }

                }

            }


        });

        return false;

    });

  });
  