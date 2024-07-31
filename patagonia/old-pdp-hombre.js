/* CUSTOM CODE */
$(document).ready(function() {
    

    var checkFilter = function () {
        console.log('ejecutadi')
        // Seleccionar el filtro "Tipo de producto" y añadir el atributo "open"
        $('details.filter-group').each(function() {
            if ($(this).find('.filter-title').text().includes('Tipo de producto')) {
                $(this).attr('open', 'open');
            }
        });
        // Seleccionar el filtro "Tipo de producto" y añadir el atributo "open"
        $('details.filter-group').each(function() {
            var parent = $(this);
            var filterGroup = $(this).find('.filter-group-display-item ');
            filterGroup.each(function(e) {
                $(this).on('click', function() {
                    parent.attr('open', 'open');
                    parent.attr('style', 'background-color: pink');
                })
            });
        });

        // Seleccionar el filtro "Talla" y añadir el atributo "open"
        $('details.filter-group').each(function() {
            if ($(this).find('.filter-title').text().includes('Talla')) {
                $(this).attr('open', 'open');
            }
        });
        
    }
    

    setInterval(checkFilter, 1000)

});
