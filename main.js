//Model Section (MVC)  - deals with data 
let todos = [
    {title: "Wake Up at 5.20", dueDate : "2022/12/1", id: 'id1'},
    {title: "Pray", dueDate: "2022/12/2", id: 'id2'},
    {title: "Recite Quran", dueDate: "2022/12/12", id: 'id3'},
    {title: "Start Working", dueDate: "2022/12/13", id: 'id4'}
]

render() // initially rendring the todolist items
function addTodo() {
    let todo = document.getElementById('txtbox').value;  //accesing the value of input text box
    const e = document.createElement('div')   //creating a 'div' tag
    e.textContent=todo  //assigning the text content inside the div tag to the value of textox

    //getting the date from date picker
    const datePick = document.getElementById("date-pick");
    const dueDate = datePick.value;

    const id = new Date().getTime()

    todos.push({
        title: todo,
        dueDate: dueDate,
        id : id
    })  // adding the object into our todos list
    // document.body.appendChild(e)
    document.getElementById('txtbox').value = ""  //clearing the textbox value
    render()
}

function deleteTodo(event){  //functon to delete the todo item
    const deleteButton = event.target;  //accesiing the target (console.log(event))
    const idToDel = deleteButton.id //getting the id of target element

    // todos = todos.filter(function(item) {
        
    //     if (item.id === idToDel) {
    //         return false
    //     } else {
    //         return true
    //     }
    // })

    todos = todos.filter(   //filtering the traget id
        item => item.id != idToDel
    )
    render()
}

function render() {
    // first we need to reset our list
    document.getElementById('todo-list').innerHTML = ""

    todos.forEach(function (todoName) {    // looping each object inside the list
        const elem = document.createElement('div');  //creating a new 'div' tag
        elem.innerHTML = `${todoName.title} ------>${todoName.dueDate}  `  //assigning the todo list item to new 'div' tag

        //Adding an delete button 
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style = "margin:0 0 5px 12px" ;
        deleteBtn.onclick = deleteTodo
        deleteBtn.id =todoName.id
        elem.appendChild(deleteBtn)  //adding the button into div tag whic created using const elem (initial div tag)
        

        let todolist = document.getElementById('todo-list')  //accesing the main 'div'
        todolist.appendChild(elem)   //appending our todo list item into main 'div' tag
        
    })
    
}