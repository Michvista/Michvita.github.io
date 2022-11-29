//              let display = document.getElementById('display');
// let buttons = Array.from (document.getElementsByClassName('button'));

// buttons.map(button => {
//     button.addEventListener('click', (e) => {
//        switch( e.target.innerText) {
//            default:
//            display.innerText += e.target.innerText;
//         } 
//     });
// })          

// let display = document.getElementById('display');

// function onclickB(e) {
//     switch(e.target.innerText) {
//         default:
//         display.innerText += e.target.innerText;
//     }
// }

const nav= document.querySelector('nav'),
changingbtn = nav.querySelector('.changingbtn');

changingbtn.addEventListener('click', ()=> {
    nav.classList.toggle('open');
});

let display = document.getElementById('display');

//regular buttons

let typeButton1 = document.getElementById('type1');
let typeButton2 = document.getElementById('type2');
let typeButton3 = document.getElementById('type3');
let typeButton4 = document.getElementById('type4');
let typeButton5 = document.getElementById('type5');
let typeButton6 = document.getElementById('type6');
let typeButton7 = document.getElementById('type7');
let typeButton8 = document.getElementById('type8');
let typeButton9 = document.getElementById('type9');
let typeButton0 = document.getElementById('type0');
let typeButton00 = document.getElementById('typef');
let typeButtonb = document.getElementById('typed');
let typeButtonbr = document.getElementById('typew');





// let typeButtons = document.querySelectorAll(".buttons type");


typeButton1.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton2.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton3.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton4.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton5.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton6.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton7.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton8.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton9.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton0.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButton00.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButtonb.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});
typeButtonbr.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});



//mathematical operators

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divide = document.getElementById('divide');
let equal = document.getElementById('equal');
let backS = document.getElementById('backS');
let clear = document.getElementById('clear');

//mathematical opeartors
plus.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});

minus.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});

times.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});

divide.addEventListener('click', (e) => {
    display.innerText += e.target.innerText;
});

backS.addEventListener('click', (e) => {

    switch(e.target.innerText){
       case '←':
                    if(display.innerText){
                        display.innerText = display.innerText.slice(0, -1);
                    }
                break;
                default:
                    display.innerText += e.target.innerText;
                }
    // if(display.innerText) {
    //     display.innerText = display.innerText.slice(0,-1);
    //     // break;
    // }
    // display.innerText += e.target.innerText;

});

clear.addEventListener('click', (e) => {
      display.innerText = '';
});

equal.addEventListener('click', (e) => {
    try{
        display.innerText = eval(display.innerText)
    } 
    catch{
       display.innerText = 'Error';
    }
});

// button =(e) =>{
//     display.innerText += e.target.innerText;

// };
// typeButtons.forEach((anchor)=> anchor.addEventListener("click", button));

// let checkbox = document.getElementById('checkbox');
// var back = document.getElementById('back')
// var number = 1;
// checkbox.addEventListener('click', ()=>{
//     // if(number=1) {
//     //     back.style.background = 'black';
//     // }
//     switch(number=1) {
//         case'checkbox': 
//         if(number=1) {
//                  back.style.background = 'black';
//              }
//                 break;
//             default: back.style.background = "darkblue";
//             }
// })    

 const checkbox = document.getElementById('checkbox');
 
 checkbox.addEventListener('change', () =>{
    document.body.classList.toggle('dark');
 })
