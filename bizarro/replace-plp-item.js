var cantCuotas = 'msi-bold';
var cuota = 'msi-fee-pdp';
var textCuota = ''; 
var textCantCuota = '';
// Selecciona todos los divs con la clase 'product-message'
var items = document.querySelectorAll('.product-message');
// Iterar sobre cada div 'item'
items.forEach(function(item) {
    // Comprobar si el div tiene la clase específica
    var children = item.children;
    for (var i = 0; i < children.length; i++) {
        var tableChild = children[i];
        if (tableChild.classList.contains(cuota)) {
            // Obtener el texto del div
            textCuota = tableChild.textContent;          
        }
        if (tableChild.classList.contains(cantCuotas)) {
            // Obtener el texto del div
            textCantCuota = tableChild.textContent;    
        } 
    }
 
    item.innerHTML = 'Mismo precio en '+textCantCuota+' de '+textCuota;
    item.classList = 'newGreen';
});

// Crear un nuevo div
console.log('mememe');
var container = document.querySelectorAll('.product-item-details');
container.forEach(function(elem) {
    // Comprobar si el div tiene la clase específica
    elem.innerHTML = elem.innerHTML + '<div class="rowShipping"><span class="shippingTime">Recibilo en 7 días.</span></div>';
});

