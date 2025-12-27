
function agregarTarea(descripcion){
    let valorInput = document.getElementById("userInput").value.trim();

if (valorInput === "") {
    alert("ingresa una tarea");
    return;
} else {
    const li = document.createElement("li");
    li.classList.add("tareaItem");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "tareaCheckbox";

    // Texto de la tarea
    const span = document.createElement("span");
    span.className = "tareaText";
    span.textContent = valorInput;

    // Cambia estado visual cuando se marca
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
    });

    li.append(checkbox, span);
    document.getElementById("list").appendChild(li);
    document.getElementById("userInput").value = "";

}
}