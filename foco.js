// se ejecuta al cargar la pagina completa
window.addEventListener('load', function(){
    // llamada a la funcion FontFaceSetLoadEvent()
    // observe como puede estar la declracion abajo de la llmada
    foco();
})

function foco(){
    let switchPrendido = false;
    const btn = document.querySelector(".switch");
    const focoArriba = document.querySelector(".foco-arriba");
    const focoAbajo = document.querySelector(".foco-abajo");
    btn.addEventListener("click",function(){
        if(switchPrendido){
            btn.classList.remove("on");
            focoArriba.classList.remove("focoOn");
            focoAbajo.classList.remove("focoOn");
        }else{
            btn.classList.add("on");
            focoArriba.classList.add("focoOn");
            focoAbajo.classList.add("focoOn");
        }
        switchPrendido = !switchPrendido;
    });
}