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
var xhisto = document.getElementById("historialventas");

function OcultarHistorial(){
	  if (xhisto.style.display === "none") {
		  xhisto.style.display = "block";
	  } else {
		  xhisto.style.display = "none";
	  }
	  
	
	
	  if (x.style.display === "block") {
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

if (xhisto.style.display === "block") {
	  xhisto.style.display = "none";
	} 
modalclientes.classList.add('ocultar')
modalproductos.classList.add('ocultar')
modalempleados.classList.add('ocultar')
fondo.classList.add('ocultar')
}

function OcultarProductos() {

	  if (xhisto.style.display === "block") {
		  xhisto.style.display = "none";
		} 
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

  if (xhisto.style.display === "block") {
	  xhisto.style.display = "none";
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

	  if (xhisto.style.display === "block") {
		  xhisto.style.display = "none";
		} 

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
const tituloEmpleado = document.getElementById('Tituloemp')
const tituloProducto = document.getElementById('Tituloprod')


// Modal 
let modalclientes =  document.getElementById("modale-cli")
let modalproductos =  document.getElementById("modale-pro")
let modalempleados =  document.getElementById("modale-emp")
let modalpregunta = document.getElementById("modale-pregunta")
let modalpreguntaenc = document.getElementById("modale-preguntaEnc")
let modalpreguntaemp = document.getElementById("modale-preguntaemp")
let modalpreguntapro = document.getElementById("modale-preguntaprod")
let btnAgregarClientes = document.getElementById("btnclientes")
let btnAgregarProduco = document.getElementById("btnAgregarProduco")
let btnAgregarEmpleado = document.getElementById("btnAgregarEmpleado")
let cerrarPreguenc = document.getElementById("close-preguEnc")
let cerrarPregu = document.getElementById("close-pregu")
let cerrarPreguemp = document.getElementById("close-preguemp")
let cerrarPreguprod = document.getElementById("close-pregupro")
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

cerrarPreguenc.addEventListener('click',()=> {
	editCSSdos()
	modalpreguntaenc.classList.add('ocultar')
  fondo.classList.add('ocultar')
})

cerrarPreguemp.addEventListener('click',()=> {
	editCSSdos()
	modalpreguntaemp.classList.add('ocultar')
  fondo.classList.add('ocultar')
})



cerrarPregu.addEventListener('click',()=> {
	editCSSdos()
	modalpregunta.classList.add('ocultar')
  fondo.classList.add('ocultar')
})

cerrarPreguprod.addEventListener('click',()=> {
	editCSSdos()
	modalpreguntapro.classList.add('ocultar')
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


function actualizarEntera() {
  var porcionesInput = document.getElementById("txtporciones");
  var enterasInput = document.getElementById("txtentera");

  var porciones = parseInt(porcionesInput.value);
  var enteras = porciones >= 20 ? Math.floor(porciones / 20) : 0;
  enterasInput.value = enteras;
}

function actualizarPorciones() {
  var porcionesInput = document.getElementById("txtporciones");
  var enterasInput = document.getElementById("txtentera");

  var enteras = parseInt(enterasInput.value);
  var porciones = enteras * 20;
  porcionesInput.value = porciones;
}

//Obtener referencias a los elementos del formulario
var precioPorcionInput = document.getElementById('txtprecioporcion');
var precioTortaCompletaInput = document.getElementById('txtprecioentera');

// Escuchar el evento de entrada en el precio de la porción
precioPorcionInput.addEventListener('input', function() {
  var precioPorcion = parseFloat(precioPorcionInput.value);
  
  // Calcular el precio de la torta completa y aplicar descuento del 20%
  var precioTortaCompleta = (precioPorcion * 20) * 0.8;

  // Actualizar el valor del precio de la torta completa en el formulario
  precioTortaCompletaInput.value = precioTortaCompleta.toFixed(2);
});




$(document).ready(function() {
    $("#arch").on("change", function(event) {
      var archivo = event.target.files[0];
      var lector = new FileReader();

      lector.onload = function(e) {
        $("#imagedefe").attr("src", e.target.result);
        $("#imagedefe").show(); // Mostrar la imagen
      };

      lector.readAsDataURL(archivo);
    });
  });


function editCSS() {
    // Obtener el elemento a editar
    var element = $(".modale");

    
    element.css("height", "150px");
    

}

function editCSSdos() {
    // Obtener el elemento a editar
    var element = $(".modale");

    
    element.css("height", "460px");
    

}