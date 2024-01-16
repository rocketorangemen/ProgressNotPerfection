const btn = document.getElementById('#submit');
const radioButtons = document.querySelectorAll('input[name="favorite-team"]');
btn.addEventListener("click",  ()  =>  {
    let selectedTeam;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedTeam = radioButton.value;
            break;
        }
    }
    console.log(selectedTeam);
})