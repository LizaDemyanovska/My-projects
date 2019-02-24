$(document).ready(function() {
    $("#phoneNumber").mask("+38 0(99) 999-99-99");

    $("#contact-form-submit").click(function(){
    	var data = new FormData();
    	data.append('email', $('#emailInput').val());
    	data.append('file', $('#fileInput')[0].files[0]);
    	data.append('tel', $('#phoneNumber').val());

    	$.ajax({
    		contentType: false,
      		processData: false,
      		data: data,
      		url: "/controller/action.php",
      		success: function(response){
      			console.log(response);
      		}
    	});
    });
  });

