let interest = ["heart"];

function Art(){
    interest.push("Art");
}

function Music(){
    interest.push("Music");
}

function Coding(){
    interest.push("Coding");
}

function Dance(){
    interest.push("Dance");
}

function Baking(){
    interest.push("Baking");
}

function Fashion(){
    interest.push("Fashion");
}

function Gardening(){
    interest.push("Gardening");
}


//function click(){

//}

//document.querySelectorAll('button').forEach(button => {
//button.addEventListener('click', function (event) {
//var textContent = event.target.textContent.trim();
//console.log(textContent);
//})
//)
//var click = document.getElementById("click");

//click.addEventListener("click", function () {
//  var content = event.target.textContent.trim();
//interest.push(content);
//});

let buttons = document.querySelectorAll('button');

// Attach the same event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Shared function
function handleButtonClick(event) {
    // Get the button that was clicked
    const clickedButton = event.currentTarget;
    interest.push(event.target.textContent.trim());
    console.log(interest);
}

function Click(){
    const clickedButton = event.currentTarget;
    interest.push(event.target.textContent.trim());
    console.log("hi");
}