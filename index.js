const actividades =[];

//definimos el nodo
const container = document.getElementById("container");
const list = document.createElement("ul"); //una ul siempre tiene como hijos "li"

function crearLista (){
    for(let i=0; i<actividades.length; i++){
        const item = document.createElement("li"); //creamos lista
        item.textContent = actividades[i]; //añadimos el texto al li
        list.appendChild(item); //pintar dentro del papá que es el ul, incluir como hijos el item
    }    
}
crearLista();

//que la lista sea hijo del div
container.appendChild(list);


//definir nodo
const activity = document.querySelector("input");
const boton = document.querySelector("button");


function agregarActividades (){
    const item = document.createElement("li"); //creamos lista
    item.textContent = activity.value;
    list.appendChild(item);
}

boton.addEventListener("click", agregarActividades);


container.appendChild(list);

