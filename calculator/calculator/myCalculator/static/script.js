const numberButtons = document.querySelectorAll(".number");
const operatoar = document.querySelectorAll(".operator")
const equal = document.getElementById("equal")
const clear = document.querySelectorAll(".clear")
const Delete = document.getElementById("delete")


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.textContent;
    });
});

operatoar.forEach(button=>{
    button.addEventListener("click", ()=>{
        if(button.textContent == "root"){
          display.value = Math.sqrt(parseInt(display.value));
        }

       else if(button.textContent == "1/X"){
        display.value = 1/parseFloat(display.value);
       }
       else if(button.textContent == "X^2"){
        display.value = display.value * display.value;
       }
       else if(button.textContent == "X!"){
        let fact = 1;
        let i=1;
        while(i <= parseInt(display.value)){
            fact = fact * i;
            i=i+1;
        }
        display.value = fact;
       }
        else{
        display.value += button.textContent;
        }
    })
})

equal.addEventListener("click", ()=> {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Syntax Error';
    }
});


clear.forEach(button => {
button.addEventListener("click", ()=> {
    display.value = "";
});
});

Delete.addEventListener("click", ()=>{
    display.value = display.value.slice(0,-1);
})



// //global variable which store the result
// let calculatedVariable=20;
// let result;


// // function calculateAnswer(n){
// //     calculatedVariable = calculatedVariable + n;
// //     let val = document.getElementsByTagName("p");
// //     val.innetHtml = val.innetHtml + `${calculatedVariable}`
// // }

// function calculateAnswer(n) {
//     calculatedVariable = calculatedVariable + n;
//     let val = document.getElementsByTagName("p")[0]; // Assuming there's only one <p> element
//     val.innerHTML = val.innerHTML + n;
// }


// //function main
// function main() {
//     // let temp =document.getElementsByTagName("");
//     // console.log(temp)  
    
//     // Step 1: Get a reference to the button element
// const button1 = document.getElementById("one");

// // Step 2: Attach an event listener (e.g., for a click event)
// button1.addEventListener("click", function() {
//     // Step 3: Define the function to be executed when the button is clicked
//     // Your code logic goes here
//     console.log("Button with id 'one' was clicked!");
//     calculateAnswer(1);
// });
    
// const button2 = document.getElementById("two");
// button2.addEventListener("click", function() {
//     calculateAnswer(2);
// });

// const button3 = document.getElementById("three");
// button3.addEventListener("click", function() {
//     calculateAnswer(3);
// });

// const button4 = document.getElementById("four");
// button4.addEventListener("click", function() {
//     calculateAnswer(4);
// });

// const button5 = document.getElementById("five");
// button3.addEventListener("click", function() {
//     calculateAnswer(5);
// });
// }

// main();