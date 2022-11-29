const addBtn = document.getElementById('addBtn');
const notes = JSON.parse(localStorage.getItem('notes'));
const note = document.querySelector('.note');
const deleteAll = document.querySelector('.clearAll');

const nav= document.querySelector('nav'),
changingbtn = nav.querySelector('.changingbtn');

changingbtn.addEventListener('click', ()=> {
    nav.classList.toggle('open');
});

addBtn.addEventListener('click', () => {
    const container = document.createElement('div');
    container.classList.add('container');
    // const note = document.createElement('div');
    // note.classList.add('note');

    container.innerHTML = `
    <div class="note">
    <input type="text">
    <textarea ></textarea>
    <button class="delete"> <i class="fas fa-trash-alt"></i></button>
</div>
        `

        const deleteBtn = container.querySelector('.delete');
       
        deleteBtn.addEventListener('click', () => {
            container.remove();
            updatelocalstorage();
        });
        updatelocalstorage();

        document.body.appendChild(container);
    });
    function updatelocalstorage() {
        const notesTxt = document.querySelectorAll('textarea');
        const notes = [];

        notesTxt.forEach((note) => {
            notes.push(note.value);
        });

        localStorage.setItem('notes', JSON.stringify(notes));

    }

    deleteAll.addEventListener('click', ()=> {
        // notes= [];
        document.querySelector('.note').innerHTML = '';
    });