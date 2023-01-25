function highScores(){
let highScores = JSON.parse(localStorage.getItem("highscores")) || [];

console.log(highScores())

highScores.sort(function(a,b){
return b.score - a.score
})

highScores.forEach(function(score) {
    let li = document.getElementById("li");
    li.textContent = `${score.initials} - ${score.score}`;
    let ol = document.getElementById("highscore");

    ol.append(li)
});

}

function clearHighScores(){
 localStorage.removeItem("highscores");
 window.location.reload();
}

//document.getElementById("clear").onclick = clearHighScores;
let clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click", clearHighScores);


