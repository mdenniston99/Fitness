/*
Student Name: Michael Denniston
File Name: script.js
Date: 9/25/2023
*/
//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src")
var descriptionSource = document.getElementById("despsrc")
//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}
//Function to display burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}
//Function to display the plank video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}
//function to display the mountain climbers example video
function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = 'media/ mountain-descriptions.vtt';
    video.style.display = "block";
    video.load();
}
//function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "promo Code: D25START";
    promo.style.color = "#FF0000";
    promo.style.fontSize = "2em";
}