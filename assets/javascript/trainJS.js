$(document).ready(function(){


    var config = {
        apiKey: "AIzaSyCc-YOZcerl9v5B7QY6bf82NXqWL1uGArU",
        authDomain: "train-time-a7eee.firebaseapp.com",
        databaseURL: "https://train-time-a7eee.firebaseio.com",
        projectId: "train-time-a7eee",
        storageBucket: "",
        messagingSenderId: "167625742451"
      };
      firebase.initializeApp(config);
    
    var databaseRef = firebase.database().ref();

    //Add New Train
    $("#submitbutton").on("click", function(){
        event.preventDefault();

        var newTrain = {
            trainName: $("#name-input").val(),
            destination: $("#destination-input").val(),
            freq: parseInt($("#frequency-input").val()),
            firstTrain: $("#time-input").val()
        }

        databaseRef.push(newTrain);
        })

    //Get new firebase data and put to html
    databaseRef.on("child_added",function(childSnapshot){
        var nameOutput = childSnapshot.val().trainName;
        var destinationOutput = childSnapshot.val().destination;
        var freqOutput = childSnapshot.val().freq;
        var firstTrainOutput = childSnapshot.val().firstTrain;
        //var nextArrivalOutpot = currenttime - freqOutput;
        //var minutesAwayOutput = currenttime - nextArrivalOutpot;

        var newRow = $("<tr>");
            var nameRow = $("<td>").text(nameOutput).appendTo(newRow);
            var destinationRow = $("<td>").text(destinationOutput).appendTo(newRow);
            var freqRow = $("<td>").text(freqOutput).appendTo(newRow);
            //var nextArrivalRow = $("<td>").text(nextArrivalOutpot).appendTo(newRow);
            //var minutesAwayRow = $("<td>").text(minutesAwayOutput).appendTo(newRow);
        
        $(".rows-go-here").append(newRow);

    })

      /*      //MOMENT EXAMPLE
        

            var randomDate = "02/23/1999";
            var randomFormat = "MM/DD/YYYY";
            var convertedDate = moment(randomDate, randomFormat);

            // Using scripts from moment.js write code below to complete each of the following.
            // Console.log to confirm the code changes you made worked.

            // 1 ...to convert the randomDate into three other date formats
            console.log(moment(convertedDate).format("MM/DD/YY"));
            console.log(moment(convertedDate).format("MMM Do, YYYY hh:mm:ss"));
            console.log(moment(convertedDate).format("X"));
            console.log("----------------------------------------");

            // 2 ...to determine the time in years, months, days between today and the randomDate
            console.log(moment(convertedDate).toNow());
            console.log(moment(convertedDate).diff(moment(), "years"));
            console.log(moment(convertedDate).diff(moment(), "months"));
            console.log(moment(convertedDate).diff(moment(), "days"));
            console.log("----------------------------------------");

            // 3 ...to determine the number of days between the randomDate and 02/14/2001
            var newDate = moment("02/14/2001", randomFormat);
            console.log(moment(convertedDate).diff(moment(newDate), "days"));

            // 4 ...to convert the randomDate to unix time (be sure to look up what unix time even is!!!)
            console.log(moment(convertedDate).format("X"));
            console.log("----------------------------------------");

            // 5 ...to determine what day of the week and what week of the year this randomDate falls on.
            console.log(moment(convertedDate).format("DDD"));
            console.log(moment(convertedDate).format("dddd"));

            //TIMESHEET EXAMPLE
            // 2. Button for adding Employees
                    $("#add-employee-btn").on("click", function(event) {
                        event.preventDefault();
                    
                        // Grabs user input
                        var empName = $("#employee-name-input").val().trim();
                        var empRole = $("#role-input").val().trim();
                        var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
                        var empRate = $("#rate-input").val().trim();
                    
                        // Creates local "temporary" object for holding employee data
                        var newEmp = {
                        "name": empName,
                        "role": empRole,
                        "start": empStart,
                        "rate": empRate
                        };
                    
                        // Uploads employee data to the database
                        database.ref("/employees").push(newEmp);
                    
                        // Logs everything to console
                        console.log(newEmp.name);
                        console.log(newEmp.role);
                        console.log(newEmp.start);
                        console.log(newEmp.rate);
                    
                        // Alert
                        alert("Employee successfully added");
                    
                        // Clears all of the text-boxes
                        $("#employee-name-input").val("");
                        $("#role-input").val("");
                        $("#start-input").val("");
                        $("#rate-input").val("");
                    });
                    
                    // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
                    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
                    
                        console.log(childSnapshot.val());
                    
                        // Store everything into a variable.
                        var empName = childSnapshot.val().name;
                        var empRole = childSnapshot.val().role;
                        var empStart = childSnapshot.val().start;
                        var empRate = childSnapshot.val().rate;
                    
                        // Employee Info
                        console.log(empName);
                        console.log(empRole);
                        console.log(empStart);
                        console.log(empRate);
                    
                        // Prettify the employee start
                        var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
                    
                        // Calculate the months worked using hardcore math
                        // To calculate the months worked
                        var empMonths = moment().diff(moment(empStart, "X"), "months");
                        console.log(empMonths);
                    
                        // Calculate the total billed rate
                        var empBilled = empMonths * empRate;
                        console.log(empBilled);
                    
                        // Add each train's data into the table
                        $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
                        empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
                    });
                    
                    // Example Time Math
                    // -----------------------------------------------------------------------------
                    // Assume Employee start date of January 1, 2015
                    // Assume current date is March 1, 2016
                    
                    // We know that this is 15 months.
                    // Now we will create code in moment.js to confirm that any attempt we use meets this test case
*/

})
    

