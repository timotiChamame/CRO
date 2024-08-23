vwo_$.getScript( "https://code.jquery.com/jquery-3.7.1.min.js" , function ( data, textStatus, jqxhr ) {
    
    // Seleccionar el contenedor padre
    function convertDiv (originalElement) {
        // Create a new div element
        let newDiv = document.createElement('div');
        console.log(originalElement.attributes)
        // Copy attributes from the original element to the new div
        for (let attr of originalElement.attributes) {
            newDiv.setAttribute(attr.name, attr.value);
        }

        // Copy the inner HTML content
        newDiv.innerHTML = originalElement.innerHTML;

        return newDiv
    }

    function insertDiv () {
        const children = $('.vtex-flex-layout-0-x-flexColChild.vtex-flex-layout-0-x-flexColChild--direita.vtex-flex-layout-0-x-flexColChild--info-derecha-producto.pb0');
        // Iterar sobre los hijos del contenedor
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            // Verificar si el elemento hijo contiene un h1
            if (child.querySelector('h1.t-heading-4')) {
                console.log(children[i])
                // Crear el nuevo div
                const imgCarousel = $("vtex-flex-layout-0-x-flexCol .ml0.mr0.pl0.pr0.flex.flex-column.h-100.w-100");
                // Insertar el nuevo div después del elemento que contiene el h1
                children[i].appendChild(imgCarousel);
            }
        }
    }
    setTimeout(insertDiv,3000)
  });