let posicao = 0;
let movimento;

function mover(){
    if(!movimento){
        movimento = setInterval(() => {
            posicao += 5;
            document.getElementById("carro").style.left = posicao + "px";

            if(posicao > window.innerWidth){
                posicao = -100;
            }
        }, 20);
    }
}
function parar() {
    clearInterval(movimento);
    movimento = null;
}