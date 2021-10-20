/**
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   10.21.2021
 * License: Public Domain.
 **/


      // Define Variables
      myTransport = ["walk","kia", "bike", "bus"];

      myMainRide = {
          make : "Kia",
          model :"Soul",
          color :"Gray",
          year  :"2013",
          name : "The Kia",
          extras : " family car, a lil dusty, small but affordable, slowly dying";
        }

      //output
      document.writeln("The types of transportation we use: ", myTransport, "</br>");
      document.writeln("My Main Ride: <pre>",
          JSON.stringify(myMainRide, null, '\t'), "</pre>");
