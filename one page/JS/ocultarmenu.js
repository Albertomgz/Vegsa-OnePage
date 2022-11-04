var navLinks = document.getElementById("navlinks");
function mostrarMenu(){
    navLinks.style.zIndex="1";
    navLinks.style.right = "0";
    

}
function ocultarMenu(){
    navLinks.style.right = "-200px";
    navLinks.style.zIndex="-1";
    
}

