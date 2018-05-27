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

        if (newTrain.trainName && newTrain.destination && newTrain.freq && newTrain.firstTrain) {
            databaseRef.push(newTrain);
            $("input").val("");
        } else {
            alert("Please fill in all fields.");
        }


    })

    //Accept Enter as a Submit Button
    $(document).on("keypress",function(){
        if (event.keyCode === 13) {
            $("#submitbutton").click();
        }
    })

    //Getting data from Firebase and adding to HTML
    databaseRef.on("child_added",function(childSnapshot){
        var nameOutput = childSnapshot.val().trainName;
        var destinationOutput = childSnapshot.val().destination;
        var freqOutput = childSnapshot.val().freq;
        var firstTrainOutput = childSnapshot.val().firstTrain;
       

        var firstTimeConverted = moment(firstTrainOutput, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);
    
        var currentTime = moment();
        console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

        // Difference between the times
        var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        // Time apart (remainder)
        var tRemainder = diffTime % freqOutput;
        console.log(tRemainder);

        // Minutes Until Next Train
        var minutesAwayOutput = freqOutput - tRemainder;
        console.log("MINUTES TILL TRAIN: " + minutesAwayOutput);

        // Next Train
        var nextArrivalOutput = moment().add(minutesAwayOutput, "minutes").format("hh:mm a");
        console.log("ARRIVAL TIME: " + moment(nextArrivalOutput).format("hh:mm a"));

        var newRow = $("<tr>");
            var nameRow = $("<td>").text(nameOutput).appendTo(newRow);
            var destinationRow = $("<td>").text(destinationOutput).appendTo(newRow);
            var freqRow = $("<td>").text(freqOutput).appendTo(newRow);
            var nextArrivalRow = $("<td>").text(nextArrivalOutput).appendTo(newRow);
            var minutesAwayRow = $("<td>").text(minutesAwayOutput).appendTo(newRow);
        
        $(".rows-go-here").prepend(newRow);
    })

})
    

