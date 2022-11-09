addServerData();
const toDoList=document.querySelector("#toDoList");
const addButton=document.getElementById("addButton");

//-----------------Get Data From Server--------------------------//

async function addServerData () {
  let dataFromServer = await getServerData();
  dataFromServer.forEach((task) => {
    let newTask = {
      description: task.description,
      id: task._id,
      done: task.done
    };
    console.log(newTask)
    taskToDom(newTask);
  });
  
}

//----------------- task from server to DOM --------------//

function taskToDom (newTask){
    const serverContent=newTask.description;
    serverContent.type="text";
    console.log(serverContent)
    let li=document.createElement("li")
    let serverInput=document.createTextNode(serverContent);
    li.setAttribute("id", newTask.id);
    let trashButton=document.createElement("i");      
    trashButton.classList.add("fa", "fa-trash-o");   //---add trashButton---//
    serverInput.innerHTML=serverContent;
    toDoList.appendChild(li);
    li.appendChild(serverInput); 
    li.appendChild(trashButton);
}

//----------------- get task from input field and post task to server -------------------------//

function taskToServer(){
  const textInput=document.getElementById("textInput").value;
  console.log(textInput);
  let task={ description: `${textInput}`, done: false};
  postServerData(task);
  
}

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  taskToServer();
  location.reload();
  document.getElementById("textInput").value="";  //---clear input field after submit---//
  
})

//---------- add line-through to task when clicked --------------//

let task=document.querySelector('ul');
 task.addEventListener("click", function (check){
  if (check.target.tagName === "LI"){
    check.target.classList.toggle("checked");
  }
}, false);

//----------------- delete task from list and server -----------------//

toDoList.addEventListener("click", function (del){
  if(del.target.className === "fa fa-trash-o"){
    const div=del.target.parentElement;
    toDoList.removeChild(div);
    deleteServerData(div.id);
  }
});


