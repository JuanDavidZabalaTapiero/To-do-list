
var list_tareas = document.getElementById("list_tareas");
const add_tarea = document.getElementById("add_tarea");
const input_tarea = document.getElementById("input_tarea");

function agregarTarea() {
    // VERIFICO SI TIENE ALGO ESCRITO
    if (input_tarea.value === '') {
        return; // No hacer nada si el campo está vacío
    }

    var div_tarea = document.createElement("div");
    div_tarea.className = 'div_tarea';

    var name_tarea = document.createElement("p");
    name_tarea.textContent = input_tarea.value;

    var button_delete = document.createElement("button");

    var icono_borrar = document.createElement("i");
    icono_borrar.className = "fa-solid fa-trash";
    icono_borrar.style.color = "#ffffff";

    // AÑADO EL ICONO AL BTN
    button_delete.appendChild(icono_borrar);

    // AÑADO EL DIV ADENTRO DE LA LISTA
    list_tareas.appendChild(div_tarea);

    // AÑADO LA TAREA AL DIV
    div_tarea.appendChild(name_tarea);

    // AÑADO EL BTN DE DELETE AL DIV
    div_tarea.appendChild(button_delete);

    // AÑADO EVENTO DE CLICK AL BTN DE DELETE
    button_delete.addEventListener('click', function () {
        list_tareas.removeChild(div_tarea);
    });

    // DEJO EL INPUT LIMPIO
    input_tarea.value = '';
}

// EVENTO AL ADD TAREA
add_tarea.addEventListener('click', agregarTarea);

// EVENTO AL PRESIONAR ENTER EN EL INPUT
input_tarea.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});
