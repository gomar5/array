const items = [];

function recibiritem(){
  let item = document.getElementById("input_items").value;

  //mostrar item al final
  // items.push(item);

  //mostrar item al comienzo
  // items.unshift(item);

  //mostrar item en alert
  // alert(items)

  //mostrar el item nuevo y eliminar el viejo
  items.splice(0, 1, item)


  let showitems = document.getElementById("contenedor");

  let h1 = document.createElement("h1");
  let h1item = document.createTextNode(items);
  h1.appendChild(h1item);

  contenedor.appendChild(h1);
}
