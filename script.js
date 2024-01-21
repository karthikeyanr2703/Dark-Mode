let icon = document.getElementById("iconMode");
let iconClass = document.getElementById('iconClass');
function switchMode(){
    console.log(2);
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        iconMode.src ="./brightness.png"
    }
    else{
        iconMode.src ="./sleep-mode.png"
    }

}
