var score = 0;

function updates() {
    score = score + 1;
    document.getElementById("score1").innerHTML = "Score: " + score;
}
function saves() {
    localStorage.setItem("score", score);
}
function nextp() {
    window.location = 'activity2.html';
}
function previouss() {
    localStorage.getItem("score", score);
    document.getElementById("spc").innerHTML = "Previous Score: " + localStorage.getItem("score");
}