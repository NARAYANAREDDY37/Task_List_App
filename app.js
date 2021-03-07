//Task App list

let taskformEl = document.querySelector('#task-form');
taskformEl.addEventListener('submit',function(){
  

  let taskinputEl = document.querySelector('#input-item');
  let task = taskinputEl.value.trim();

  //get task form local storage
  let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

  taskList.unshift(task);

  //set to local storage
  localStorage.setItem('tasks',JSON.stringify(taskList));
  displayTask();
  window.reload();
  
});

//fetch data from local storage and display in UI
let displayTask = () => {

  let taskListEl = document.querySelector('#task-list');
  let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  
  if(taskList.length !== 0) {
    let eachTask = '';
    for(let task of taskList){
      
      eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
      <span class="font-weight-bold">${task}</span>
      <button class="close">
        <i class="fa fa-times-circle"></i>
      </button>
    </li>`;
    }
    taskListEl.innerHTML = eachTask;
  }
};
displayTask();

//remove tasks
let taskListEl = document.querySelector('#task-list');
taskListEl.addEventListener('click', function(event){
  let targetElement = event.target;
  if(targetElement.classList.contains('fa-times-circle')){
    let actualEl = targetElement.parentElement.parentElement;
    let selectedTask = actualEl.innerText;

    //get tasks from local storage
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList = taskList.filter(function(task){
      return task.trim() !== selectedTask.trim();
    });
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTask();
   
  }
});