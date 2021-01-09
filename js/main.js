document.getElementById('formulario').addEventListener('submit',guardarTarea);
let hora = new Date();
console.log(hora);

function guardarTarea(e) {
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('descripcion').value;

    const tarea = {
        title: titulo,
        description: descripcion
    };

    if (localStorage.getItem('tareas') === null ) {
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }else {
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    verTareas();
    document.getElementById('fomulario').resert();
    e.preventDefault();
}

function verTareas() {
    localStorage.getItem('tareas');
    let tareasNotas = JSON.parse(localStorage.getItem('tareas'));
    let notas = document.getElementById('almacen');
    notas.innerHTML = '';

    for (let i = 0; i < tareasNotas.length; i++) {
        let titulo = tareasNotas[i].title;
        let descripcion = tareasNotas[i].description;
        notas.innerHTML += `
        <div class="nota">
            <h3>${titulo}</h3>
            <p> ${descripcion}</p><br>
            <p> ${hora} </p>
            <button onclick="borrar('${titulo}')"  class="btn_borrar" id="btn_borrar"></button>
        </div>
        `
    }

}



function borrar(titulo) {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].title == titulo ){
            tareas.splice(i,1);
        } 
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
    verTareas();
}

verTareas();
