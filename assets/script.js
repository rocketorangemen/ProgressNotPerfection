const btn = document.getElementById('#submit');
const radioButtons = document.getElementsByName('favorite-team');
// const selectedTeam = radioButtons[i].value;


function teamPick() {
for (var i = 0, length = radioButtons.length; i < length; i++) {
    if(radioButtons[i].checked) {
        console.log(radioButtons[i].value);

        return radioButtons[i].value;
    }
}};

// console.log(selectedTeam);

// function jets(selectedTeam) {
//     if(selectedTeam.value = jets) {
//         console.log("green");
//         return;
//     }
// };



// Submit button registry
// btn.addEventListener("click",  ()  =>  {
//     let selectedTeam;
//     for (const radioButton of radioButtons) {
//         if (radioButton.checked) {
//             selectedTeam = radioButton.value;
//             break;
//         }
//     }
//     console.log(selectedTeam);
// })