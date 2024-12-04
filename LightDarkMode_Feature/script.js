var main = document.querySelector("#main");
var switchmode = document.querySelector("#switchmode");
var button = document.querySelector("button");
var flag = 0
button.addEventListener("click", function(){
    if(flag == 0){
        switchmode.textContent = "Light Mode";
        main.style.backgroundColor = "white";
        button.style.backgroundColor = "#000";
        button.style.color = "#fff";
        flag = 1;
    }else{
        switchmode.textContent = "Dark Mode";
        main.style.backgroundColor = "#000";
        button.style.backgroundColor = "#FFF";
        button.style.color = "#000";
        flag = 0;
    }
})



// var flag = 0;
// if(flag = 0){
//     switchmode.textContent = "Light Mode";
//     flag = 1;
// }else{
//     switchmode.textContent = "Dark Mode";
//     flag  = 0;
// }