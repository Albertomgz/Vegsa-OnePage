let animado = document.querySelectorAll(".animado");

function mostrarsacroll()
{
    let scrollTop=document.documentElement.scrollTop;
    for(var i=0;i<animado.length; i++)
    {
        let alturaanimado = animado[i].offsetTop;
        if(alturaanimado-600<scrollTop)
        {
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener('scroll',mostrarsacroll);