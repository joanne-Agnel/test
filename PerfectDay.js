let interest = [];
var clicked = false

function Art(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Art","Art Gallery");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Art").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Art", "Art Gallery")
        clickedButton.style.backgroundColor = "white"
    }
}

function Music(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Music", "Concert");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Music").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Music", "Concert")
        clickedButton.style.backgroundColor = "white"
    }
}

function Coding(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Coding", "Hackathon");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Coding").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Coding", "Hackathon")
        clickedButton.style.backgroundColor = "white"
    }
}

function Dance(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Dance", "Street Dance Battle");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Dance").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Dance", "Street Dance Battle")
        clickedButton.style.backgroundColor = "white"
    }
}

function Baking(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Baking", "Baked goods donations");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Baking").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Baking", "Baked goods donations")
        clickedButton.style.backgroundColor = "white"
    }
}

function Fashion(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Fashion", "");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Fashion").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Fashion")
        clickedButton.style.backgroundColor = "white"
    }
}

function Languages(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Languages");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Languages").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Languages")
        clickedButton.style.backgroundColor = "white"
    }
}

function DIY(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("DIY");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("DIY").style.color = "black"
    }else{
        clicked = false;
        interest.pop("DIY")
        clickedButton.style.backgroundColor = "white"
    }
}

function Photography(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Photography");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Photography").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Photography")
        clickedButton.style.backgroundColor = "white"
    }
}

function Writing(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Writing");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Writing").style.color = "Black"
    }else{
        clicked = false;
        interest.pop("Writing")
        clickedButton.style.backgroundColor = "white"
    }
}

function Hiking(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Hiking");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Hiking").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Hiking")
        clickedButton.style.backgroundColor = "white"
    }
}

function Sports(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Sports");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Sports").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Sports")
        clickedButton.style.backgroundColor = "white"
    }
}

function Other(){
    const clickedButton = event.currentTarget;
    if (!clicked) {
        clicked = true;
        interest.push("Other");
        clickedButton.style.backgroundColor = "grey"
        document.getElementById("Other").style.color = "black"
    }else{
        clicked = false;
        interest.pop("Other")
        clickedButton.style.backgroundColor = "white"
    }
}

function Done() {
    const clickedButton = event.currentTarget;
    console.log(interest);
}