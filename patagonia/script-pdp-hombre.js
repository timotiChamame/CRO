/* CUSTOM CODE */

$(document).ready(function() {

var removeFilters = function (params) {
    //remove filter name if already exist in local storage
$('.filter-group-summary').on('click', function () {
    var title = $(this).find('.filter-title').text();
    const index = openFilters.indexOf(title);
    var updatedArray = openFilters.filter(function(item) {
        return item !== title;
    });
    openFilters = updatedArray; // Update the original array
});
};

 // checkea si un filtro esta dentro del array del LS y añade el atributo "open"   
var openFromLocalStorage = function () {
    var openedFiltersInView = JSON.parse(localStorage.getItem('openFilters'));
    $.each(openedFiltersInView, function (i) {
        $('details.filter-group').each(function() {
            if ($(this).find('.filter-title').text().includes(openedFiltersInView[i])) {
                $(this).attr('open', 'open');
            }
        });
    })
    removeFilters()
};

var checkFiltersLocalStorage = function () {
    $('details.filter-group').each(function() {
        var parent = $(this);
        var filterName = parent.find('.filter-title').text();
        if (parent.attr('open') !== undefined) {
            if (openFilters.indexOf(filterName) > -1) {
                console.log('filter in array')
            } else {
                openFilters.push(filterName)
            }
            
        } 
    });

    localStorage.removeItem('openFilters');
    localStorage.setItem('openFilters', JSON.stringify(openFilters));
    openFromLocalStorage()
}
    var openFilters = ['Tipo de producto','Talla'];
    removeFilters();
    setInterval(checkFiltersLocalStorage, 3000);
});
 
