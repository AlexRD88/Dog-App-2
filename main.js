"use strict";
//goal-make a function that passes user input 1-50 to end of api request and display in DOM

function getDogImages(userNum) {
    if (userNum > 50) {
        return alert("Please choose a number equal or less than 50");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
            .then(response => response.json())
            .then(displayResults)
            .catch(error => alert('Something went wrong. Try again later.'));
    }
}

function displayResults(responseJson) {
    const imageList = responseJson.message;
    console.log(imageList);

    const imageUrls = imageList
        .map((imageUrl, index) => 
            `<img src="${imageUrl}" alt="Generated dog image #${index+1}" class="loadedImages">`
        )
        .join('');

    // const imageUrls = imageList.reduce((string, imageUrl, index) =>
    //     string += `<img src="${imageUrl}" alt="Generated dog image #${index+1}" class="loadedImages">`
    // , "");

    console.log(imageUrls);

    $('.images').replaceWith(`<div class="images">${imageUrls}</div>`);
}


function listenForUserNum() {
    $("#js-dogForm").submit(event => {
        event.preventDefault();
        let userNum = $("#js-dogNumber").val();
        getDogImages(userNum);
    });
}


$(function () {
    console.log("App loaded! Waiting for submit!");
    listenForUserNum();
});