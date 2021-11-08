/**
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   11.09.2021
 * License: Public Domain.
 **/

 // Using jQuery, create buttons to add to the challenge, problems, and results sections of your document:
 // Find the section you want to add the button to

  // Create the button
 $("#first-butt").click(function(){
   $("#first").toggleClass("red")
 })

 $("#second-butt").click(function(){
   $("#second").toggleClass("orange")
 })

 $("#third-butt").click(function(){
   $("#third").toggleClass("yellow")
 })
