/*
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   11.30.2021
 * License: Public Domain.
 */

 var myUrl = "https://api.kanye.rest";

 $("#my-button").click(callAjax);

 function callAjax(){
  console.log("click");

 // Using the core $.ajax() method
 $.ajax({
     // The URL for the request (from the api docs)
     url: myUrl,
     // The data to send (will be converted to a query string)
    				/* 	 data: {
    					             // here is where any data required by the api
    					             //   goes (check the api docs)
    					             id: 123,
    					             api_key: "blahblahblah",
    					           }, */
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     /* dataType : "json", */
     })
     // What do we do when the api call is successful
     //   all the action goes in here
    .done(function (data) {
         // do stuff
         console.log("Success:", data);
         $("#output").html(data);
     })
     // What we do if the api call fails
     .fail(function (request, error) {
         // do stuff
         console.log(request,error);
     });

 /*  success: function (data) {
         // do stuff
         console.log(data);
         $("#output").html(data);
     }
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     } */

 }
