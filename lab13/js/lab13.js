/**
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   11.017.2021
 * License: Public Domain.
 **/

//  Create a "FizzBuzz" function similar to how we did in class.

// Loop through numbers 1 to 200, listing them as you go

// If the number is a multiple of 3, if should print "Fizz!"

// If the number is a multiple of 5, it should print "Buzz!"

// If the number is a multiple of 7, it should print "Boom!"

// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.

// Make it so the output of your program appears in your output div.
//  function fizzbuzzboom (maxNums, factorObj){
//       for (var i=1; i<=200; i++)
//       if(i % 3 == 0 && i % 5 == 0 && i % 7 == 0){
//         console.log("FizzBuzzBoom!");
//       }
//       else if(i % 3 == 0 && i % 5 == 0 ){
//         console.log("FizzBuzz!");
//       }
//        else if(i % 3 == 0 && i % 7 == 0 ){
//         console.log("FizzBoom!");
//       }
//       else if(i % 5 == 0 && i % 7 == 0 ){
//         console.log("BuzzBoom!");
//       }
//           else if (i % 3 == 0){
//               console.log("Fizz!");
//           }
//           else if (i %  5 == 0){
//               console.log("Buzz!");
//           }
//           else if (i %  7 == 0){
//                 console.log("Boom!");
//             }
//           else {
//               console.log(i);
//           }
// }
function fizzbuzzboom (200){
  for (var i=0; i<=200; i++) {
   var str= "";
      if (i % 3 == 0) {
          str += "Fizz";
      }
      if (i % 5 == 0) {
          str += "Buzz";
      }
      if (i % 7 == 0) {
          str += "Boom";
      }
      if (i % 13 == 0) {
          str += "Bang";
      }
      if (str == "") {
          str = i;
      }
      else {
          str += "!";
      }
      console.log(str);
  }
}

$("#output").append("<p>" + str + "</p>");
