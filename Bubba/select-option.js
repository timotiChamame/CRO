const elem = document.getElementById("SortBy");
elem.childNodes.forEach(function(element, index){
  if ( element.value === "best-selling" && !element.selected) {
    console.log('Found! Index is ', index);
   // elem.selectedIndex = index;
  }
});
xxxxxxxxxxxxxxxxxxxxx
var url = new URL(window.location);
// Split the pathname into segments
    var pathSegments = url.pathname.split('/');

    // Check if the segment already exists in the path
    if (!pathSegments.includes('?sort_by=best-selling')) {
        // If the segment does not exist, add it to the path
        url.pathname += '/' + decodeURIComponent('?sort_by=best-selling');

        // Update the URL without reloading the page
        window.history.pushState({}, '', url);    }
