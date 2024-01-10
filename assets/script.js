var favteam = document.getElementsByName('favorite-team');
var selectedteam = favteam.values.toString;
var submit = document.getElementById('submit');
var userinput = selectedteam.value;
console.log(favteam);

for (key in favteam) {
    console.log(key);
    // console.log(favteam[key])
}
// Looking to see variables in console
// console.log(selectedteam);
// console.log(userinput);

// defaultvalue is the property withing the array holding the team names
