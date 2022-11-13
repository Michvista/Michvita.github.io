const nav= document.querySelector('nav'),
changingbtn = nav.querySelector('.changingbtn');

changingbtn.addEventListener('click', ()=> {
    nav.classList.toggle('open');
});

const addbtn = document.getElementById('addOne');
const inputSpace = document.getElementById('inputfield');
const deleteAll = document.querySelector('.footer button');
const lists = document.getElementsByClassName('li');
const todo = document.querySelector('.todo_list');
const pending = document.querySelector('.pending');
// pending.textContent = lists.length;
// const lists = document.getElementsByClassName('li');

addbtn.addEventListener('click', ()=> {
    // var NewTodo = document.createElement('li');
    // NewTodo.classList.add('li');
    // NewTodo.classList.add('#checky');
    // NewTodo.innerText = inputSpace.value;
    // todolists.appendChild(NewTodo);
    // inputSpace.value = '';
        if (document.querySelector('input').value.length==0) {
            alert('Pls enter a task');
        } else {
            document.querySelector('.todo_list').innerHTML += `
            <div class="todos">
            <ul class="todo_list">
                <li id='taskname'>
                ${document.querySelector('input').value}
                <button class= 'delete'>
                <i class="fa-solid fa-trash"></i>
                </button>
                </li>
            </ul>
            </div>
            `
            inputSpace.value = '';
        }
        var current_tasks = document.querySelectorAll('.delete');
        for (var i =0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function (){
                this.parentNode.remove();
            }
        }
        
        var tasks = document.querySelectorAll("#taskname");
           for (var i =0; i<tasks.length; i++){
            tasks[i].onclick = function (){
                this.classList.toggle('line-through');
            }
        }
});
deleteAll.addEventListener('click', ()=> {
    // lists = [];
    document.querySelector('.todo_list').innerHTML = '';
});
// Array.from(checkbox).forEach(v => v.addEventListener('change', () =>{
//     this.parentNode.classList.toggle('checked');
// }));


// inputSpace.onkeyup = () => {
//     let userValue = inputSpace.value;
//     if(userValue.trim() !=0) {
//         addbtn.classList.add('active');
//     } else{
//         addbtn.classList.remove('active');
//     }
// }

// listsTag.forEach( (id) => {
//     for (const list_no in lists) {
//         console.log(lists[list_no]);
//     };
// });




// addbtn.onclick = () => {
//     let userValue = inputSpace.value;
//      let listStorage = 
// };
