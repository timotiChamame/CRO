var cantCuotas = 'msi-bold';
var cuota = 'msi-fee-pdp';
var textCuota = ''; 
var textCantCuota = '';
// Selecciona todos los divs con la clase 'product-message'
var items = document.querySelectorAll('.product-message');

// Crear un nuevo div
var newDiv = document.createElement('div');
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

