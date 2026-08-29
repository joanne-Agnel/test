const interest = [];

//function click(){
    
//}

//document.querySelectorAll('button').forEach(button => {
    //button.addEventListener('click', function (event) {
      //var textContent = event.target.textContent.trim();
      //console.log(textContent);
    //})
//)

const Click = document.getElementById("click");

// Add EventListener to btn
Click.addEventListener("click", function () {
    var content = event.target.textContent.trim();
    interest.push(content);
    document.getElementsByClassName(Done).innerHTML = content;
});