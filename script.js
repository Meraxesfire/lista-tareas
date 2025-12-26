class tarea{
    constructor(id, desc, registro){
    this.id= id;
    this.desc=desc;
    this.registro=registro;
    }
}

const listaTareas = [];

function agregarTarea(descripcion){

    let valorInput =document.getElementById("userInput").value;

if(valorInput==""){
    alert("ingresa una tarea")
    return;
}else{
    const li=document.createElement("li");
    li.classList.add("tareaItem");
    li.textContent=valorInput;
    document.getElementById("list").appendChild(li)
    document.getElementById("userInput").value = "";
}


}