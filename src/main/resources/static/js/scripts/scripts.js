const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

var x = document.getElementById("clientes");
var xp = document.getElementById("productos");
var xe = document.getElementById("empleados");
var xenc = document.getElementById("encargos")

function OcultarClientes() {
  
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
 
  if (xp.style.display === "block") {
    xp.style.display = "none";
} 

if (xe.style.display === "block") {
  xe.style.display = "none";
} 

if (xenc.style.display === "block") {
  xenc.style.display = "none";
} 

modalclientes.classList.add('ocultar')
modalproductos.classList.add('ocultar')
modalempleados.classList.add('ocultar')
fondo.classList.add('ocultar')
}

function OcultarProductos() {

  if (xe.style.display === "block") {
    xe.style.display = "none";
  } 

  if (x.style.display === "block") {
      x.style.display = "none";
  } 


  if (xenc.style.display === "block") {
    xenc.style.display = "none";
  } 
  
  if (xp.style.display === "none") {
      xp.style.display = "block";
  } else {
      xp.style.display = "none";
  }
  modalclientes.classList.add('ocultar')
  modalproductos.classList.add('ocultar')
  modalempleados.classList.add('ocultar')
  fondo.classList.add('ocultar')

} 

function OcultarEmpleados() {
  if (xp.style.display === "block") {
    xp.style.display = "none";

} 

if (xenc.style.display === "block") {
  xenc.style.display = "none";
} 


if (x.style.display === "block") {
  x.style.display = "none";
} 



if (xe.style.display === "none") {
  xe.style.display = "block";
} else {
  xe.style.display = "none";
}

modalclientes.classList.add('ocultar')
modalproductos.classList.add('ocultar')
modalempleados.classList.add('ocultar')
fondo.classList.add('ocultar')

}


function OcultarEncargos() {


  if (xp.style.display === "block") {
    xp.style.display = "none";

} 


if (x.style.display === "block") {
  x.style.display = "none";
} 

if (xe.style.display === "block") {
  xe.style.display = "none";
} 



  if (xenc.style.display === "none") {
    xenc.style.display = "block";
  } else {
    xenc.style.display = "none";
  }

  modalclientes.classList.add('ocultar')
  modalproductos.classList.add('ocultar')
  modalempleados.classList.add('ocultar')
  fondo.classList.add('ocultar')

}

//Modo modal 

let  modo = ''
const tituloCliente = document.getElementById('Titulo')

// Modal 
let modalclientes =  document.getElementById("modale-cli")
let modalproductos =  document.getElementById("modale-pro")
let modalempleados =  document.getElementById("modale-emp")
let modalpregunta = document.getElementById("modale-pregunta")
let btnAgregarClientes = document.getElementById("btnclientes")
let btnAgregarProduco = document.getElementById("btnAgregarProduco")
let btnAgregarEmpleado = document.getElementById("btnAgregarEmpleado")

let cerrarPregu = document.getElementById("close-pregu")
let cerrarCli = document.getElementById("close-cli")
let cerrarPro = document.getElementById("close-pro")
let cerrarEmp = document.getElementById("close-emp")
let fondo = document.getElementById("fondo")




btnAgregarProduco.addEventListener('click',()=> {
  modalproductos.classList.remove('ocultar')
  fondo.classList.remove('ocultar')
  
})

btnAgregarEmpleado.addEventListener('click',()=> {
  modalempleados.classList.remove('ocultar')
  fondo.classList.remove('ocultar')
  
})

cerrarPregu.addEventListener('click',()=> {

	modalpregunta.classList.add('ocultar')
  fondo.classList.add('ocultar')
})


cerrarCli.addEventListener('click',()=> {

  modalclientes.classList.add('ocultar')
  fondo.classList.add('ocultar')
})

cerrarPro.addEventListener('click',()=> {

  modalproductos.classList.add('ocultar')
  fondo.classList.add('ocultar')
})


cerrarEmp.addEventListener('click',()=> {

  modalempleados.classList.add('ocultar')
  fondo.classList.add('ocultar')
})