const btn = document.getElementById('#submit');
const radioButtons = document.getElementsByName('favorite-team');

for (var i = 0, length = radioButtons.length; i < length; i++) {
    if(radioButtons[i].checked) {
        alert(radioButtons[i].value);
        break;
    }
};


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