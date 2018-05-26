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
            destination: $("#destination-input").val()
        }

        databaseRef.push(newTrain);
        })

    //Get new firebase data and put to html
    databaseRef.on("child_added",function(childSnapshot){
        var nameOutput = childSnapshot.val().trainName;
        var destinationOutput = childSnapshot.val().destination;

        var newRow = $("<tr>");
            var nameRow = $("<td>").text(nameOutput).appendTo(newRow);
            var destinationRow = $("<td>").text(destinationOutput).appendTo(newRow);
        
        $(".rows-go-here").append(newRow);

    })

})
    

