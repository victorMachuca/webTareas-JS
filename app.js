//seleccionar input/
const input = document.querySelector('input'); //selector de tipo
//cuando llamamos a clases, usar punto antes del nombe(sel ector d clase)
const addBtn = document.querySelector('.btn-add');
const deleteAll = document.querySelector('.btn-delete-all');
const ul = document.querySelector('ul')
const empty = document.querySelector('.empty');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();//evita que pagina se recargue
    
    const text = input.value;//cogemos datos
        if(!text =="") {
            //creamos elementos de tipo especificado
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.textContent = text;
                
                li.appendChild(p);//agrega un nodo "p" al elemento padre "li"
                li.appendChild(addDeleteBtn());//agrega un nodo "button" al elemento padre "li" 
                ul.appendChild(li); //agrega un nodo "li" al elemento padre "ul"
            
                input.value = ""; //deja en blanco luego de usar el boton
                empty.style.display = "none"; //oculta el elemento 

        }

});  

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
//creamos su clase para "pintarla"
    deleteBtn.addEventListener("click", (e)=> {
        const item = e.target.parentElement;//e.target selecciona el boton, .parent element selecion el elemento que lo contiene(lista) 
        ul.removeChild(item); //elmimina la lista(ul porque manda en jerarqruia)
    
        const items = document.querySelectorAll('li');//muestra el mensaje Tareas pendientes luego usar el boton borrar
        if (items.length === 0) { //comprueba que no hay tareas"
            empty.style.display = "block"; //vuelve a mostrar el elemento "empty", 
        }
    })
    return deleteBtn;
}

deleteAll.addEventListener("click", (e) => {
    e.preventDefault();//evita que pagina se recargue
    
    const item = document.querySelectorAll('li');//itera en el array hasta eliminar todos elementos
    for(let i = 0; i<item.length; i++){
        ul.removeChild(item[i]);
    }

    const items = document.querySelectorAll('li');//muestra el mensaje Tareas pendientes luego usar el boton borrar Todo
        if (items.length === 0) {
            empty.style.display = "block"; //muestra el elemento como un bloque
        }

}); 