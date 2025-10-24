const inputName = document.getElementById('inputName');
const inputAnimal = document.getElementById('inputAnimal');
const inputAge = document.getElementById('inputAge');
const inputRace = document.getElementById('inputRace');
const selectState = document.getElementById('selectStates');

const btnSave = document.getElementById('btnSave');

btnSave.addEventListener('click', () => {

    const name = inputName.value;
    const animal = inputAnimal.value;
    const age = inputAge.value;
    const race = inputRace.value;
    const state = selectState.value;

    const userData = {
        name, 
        animal,
        age,
        race,
        state
    };

    const jsonString = JSON.stringify(userData);

    localStorage.setItem('userData', jsonString);

});

document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {
    
    const userData = localStorage.getItem('userData')

    if(userData) {
        const key = JSON.parse(userData);

        inputName.value = key.name;
        inputAnimal.value = key.animal;
        inputAge.value = key.age;
        inputRace.value = key.race;
        selectState.value = key.state;
    
    } else {

        inputName.value = '';
        inputAnimal.value = '';
        inputAge.value = '';
        inputRace.value = '';
        selectState.value = 'Selecciona el estado';
    
    }
}