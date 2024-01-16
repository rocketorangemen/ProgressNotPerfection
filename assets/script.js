// const favteam = document.getElementsByName('favorite-team');
// const selectedteam = favteam.values.toString;
// const submit = document.getElementById('submit');
// const userinput = selectedteam.value;
const radioButtons = document.querySelectorAll('label[name="favorite-team"]');
console.log(radioButtons);
const btn = document.getElementById('submit');
console.log(btn.type);
// console.log(favteam);

btn.addEventListener('click', () => {
    let selectedTeam;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedTeam = radioButton.value;
            break;
        }
    }
})

// Work in progress on getting the name of teams put into console log
// for (key in favteam) {
//     console.log(key);
//     // console.log(favteam[key])
// };

// Looking to see variables in console
// console.log(selectedteam);
// console.log(userinput);

// defaultvalue is the property withing the array holding the team names
