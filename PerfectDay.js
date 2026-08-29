const interest = [];

//function click(){
    
//}

//document.querySelectorAll('button').forEach(button => {
    //button.addEventListener('click', function (event) {
      //var textContent = event.target.textContent.trim();
      //console.log(textContent);
    //})
//)
var click = document.getElementById("click");

click.addEventListener("click", function () {
    var content = event.target.textContent.trim();
    interest.push(content);
    document.getElementById(Done).innerHTML = content;
});