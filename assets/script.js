// var name = window.prompt("What is your name?");
// document.write("Hello " + name + ", how are you today?");

var button = document.querySelector('#submit');
var teams = document.querySelectorAll('input[name="favorite-team"]');
var it = document.querySelector('#it');
// var favteam = document.querySelector(radio.name);
// console.log(teams.values);
// console.log(radio.name);

button.addEventListener('click', () => {
    var selectedTeam;
    for (var favteam of teams) {
        if(teams.check) {
            selectedTeam = favteam.value;
            console.log(selectedTeam);
        }
    }
});


