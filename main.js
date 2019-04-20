"use strict";
//goal-make a function that passes user input 1-50 to end of api request.

function getDogImages(userNum) {
    if (userNum > 50) {
        return alert("Please choose a number equal or less than 50");
} else {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }
}

function listenForUserNum() {
    $("#js-dogForm").submit(event => {
        event.preventDefault();
        let userNum = $("#js-dogNumber").val();
        getDogImages(userNum);
    });
}


$(function() {
  console.log("App loaded! Waiting for submit!");
  listenForUserNum();
});


