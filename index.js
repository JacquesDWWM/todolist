// constantes des éléments html
const toggle = document.querySelector('.todo-checkbox');
toggle.addEventListener('click', () => {
    if (toggle.checked) {
        root.style.display = 'none';
    } else {
        root.style.display = '';
    }
})
const root = document.querySelector('#root');
const tdList = document.querySelector('#todolist');
const cat = document.querySelector('#category');
// barre pour nouvelle tâche
const input = document.querySelector('#addTask');
input.addEventListener('keypress', (e) => {
    if (event.key === 'Enter') {
        addTodo();
    }});
const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', addTodo);
// constantes pour le tri visuels des tâches
let visibilityMode = 'all';//mode de visibilité
const all = document.querySelector('#all');//toutes les tâches
all.addEventListener('click', () => {
    visibilityMode = 'all';
    updateVisibility();
});
const done = document.querySelector('#done');//uniquement les tâches faites
done.addEventListener('click', () => {
    visibilityMode = 'done';
    updateVisibility();
});
const todo = document.querySelector('#todo');//uniquement les tâches à faire
todo.addEventListener('click', () => {
    visibilityMode = 'todo';
    updateVisibility();
});
// fonction pour ajouter une nouvelle tâche
function addTodo () {
    const newList = document.createElement('div'); // contenant tâche
    newList.setAttribute('class', 'todo');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox');
    checkbox.addEventListener('click', (e) => { //change etat texte
        if (checkbox.checked){
        text.style.textDecoration = 'line-through';
        text.style.color = '#000';
        } else {
        text.style.textDecoration = 'none';
        text.style.color = '#fff';
        }})
    const text = document.createElement('p');
    text.innerText = input.value;;
    text.setAttribute('contentEditable', 'true');
    const remove = document.createElement('button');
    remove.setAttribute('id', 'remove');
    remove.innerText = 'X';
    remove.addEventListener('click', removeTodo);

    newList.append(checkbox, text, remove); //contenu d'une liste
    cat.after(newList); //position nouvelle liste
    input.value = ''; // remet à zéro l'input
    updateVisibility();
}
// fonction pour supprimer une tâche
function removeTodo() {
    const thisList = this.parentNode;
    thisList.remove();
}
// fonction pour l'état de visibilité des tâches
function updateVisibility() {
    const newLists = document.querySelectorAll('.todo');
    newLists.forEach(newList => {
    if (visibilityMode === 'all') {
        newList.style.display = 'flex';
    } else if (visibilityMode === 'done' && newList.querySelector('#checkbox').checked) {
        newList.style.display = 'flex';
    } else if (visibilityMode === 'todo' && !newList.querySelector('#checkbox').checked) {
        newList.style.display = 'flex';
    } else {
        newList.style.display = 'none'
    }
})
}


